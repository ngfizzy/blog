import { SetPageTitle } from 'src/app/core/state/core.actions';
import { getArticles } from './../../authors-portal/authors-articles/state/index';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as fromArticles from '../state';
import * as fromArticlesActions from '../state/articles.actions';
import * as fromAppActions from '../../core/state/core.actions';
import { Title, Meta } from '@angular/platform-browser';
import * as fromApp from '../../core/state';

import { ArticlesState } from '../state/articles.state';
import { Article } from '../../shared/models/article.interface';
import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';
import {
  Audience,
  AudienceActivity,
  ApplaudPayload,
  CommentPayload,
} from 'src/app/shared/models';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  map,
  tap,
} from 'rxjs/operators';

@Component({
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  articles$: Observable<Article[]>;
  audience$: Observable<Audience>;
  audienceActivities$: Observable<AudienceActivity[]>;
  pageTitle$: Observable<string>;
  hideScrollBar: boolean;
  currentUserApplauds = 0;
  selectedArticle: Article;
  articleConfig: ArticleComponentConfig = {
    isActive: false,
    isExpandedView: false,
    isTouched: false,
    canToggle: true,
    isFull: true,
  };

  private applaudsWatcherSubject$: Subject<ApplaudPayload> = new Subject();
  private applaudsWatcher$ = this.applaudsWatcherSubject$
    .asObservable()
    .pipe(debounceTime(800), distinctUntilChanged());

  constructor(
    private route: ActivatedRoute,
    private store: Store<ArticlesState>,
    private toastr: ToastrService,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromAppActions.GetCurrentAudience());
    this.articles$ = this.store.pipe(select(fromArticles.getAllArticles),tap(t => console.table(t)));
    this.audience$ = this.store.pipe(select(fromApp.getAudience));
    this.audienceActivities$ = this.store.pipe(
      select(fromArticles.getSelectedArticleActivities),
    );

    this.applaudsWatcher$
      .pipe(takeUntil(this.destroy$))
      .subscribe(applauds =>
        this.store.dispatch(new fromArticlesActions.Applaud(applauds)),
      );

    this.title.setTitle(`NgFizzy Blog - Tech`);
    this.meta.updateTag({
      name: 'Tech',
      content: 'All things software development',
    });

    this.getArticlesByCategory();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitComment(comment: CommentPayload) {
    this.store.dispatch(new fromArticlesActions.AddComment(comment));
  }

  submitApplauds(applauds: ApplaudPayload) {
    this.applaudsWatcherSubject$.next(applauds);
  }

  setSelectedArticle(article: Article) {
    this.selectedArticle = article;

    if (article) {
      this.store.dispatch(new fromArticlesActions.GetOneArticle(article.id));
      this.currentUserApplauds = 0;
    }

    this.updateTitleAndMeta(article);
  }

  showNotification(message: string) {
    this.toastr.info(message);
  }

  toggleScrollBar(hide: boolean) {
    document.body.style.overflowY = hide ? 'hidden' : 'auto';

    this.hideScrollBar = hide;
  }

  updateAudienceApplauds(applauds: number) {
    this.currentUserApplauds = applauds;
  }

  private getArticlesByCategory() {
    this.route.queryParamMap.subscribe(queryParamMap => {
      const categoryId = +queryParamMap.get('categoryId');

      this.articles$ = this.store.pipe(
        select(getArticles),
        map(articles => {
          if (!categoryId) {
            return articles;
          }

          return articles.filter(article => {
            const category = article.categories.find(
              cat => cat.id === categoryId,
            );

            return !!category;
          });
        }),
        tap(([article]) => {
          let pageTitle = 'Articles and Tutorials';
          if (categoryId) {
            pageTitle = article.categories.find(cat => cat.id === categoryId)
              .name;
          }

          this.store.dispatch(new SetPageTitle(pageTitle));
        }),
      );
    });
  }

  private updateTitleAndMeta(article: Article) {
    if (article) {
      this.title.setTitle(`NgFizzy Blog - Tech: ${article.title}`);
      this.meta.updateTag({
        name: `NgFizzy Blog - Full Article`,
        content: article.title,
      });
    }
  }
}
