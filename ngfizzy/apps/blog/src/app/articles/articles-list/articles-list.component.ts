import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  map,
  tap,
} from 'rxjs/operators';


import { SetPageTitle } from '../../core/state/core.actions';
import * as fromArticles from '../state';
import * as fromArticlesActions from '../state/articles.actions';
import * as fromAppActions from '../../core/state/core.actions';
import * as fromApp from '../../core/state';
import { ArticlesState } from '../state/articles.state';
import { Article } from '../../shared/models/article.interface';
import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';
import {
  Audience,
  AudienceActivity,
  ApplaudPayload,
  CommentPayload,
  Category,
} from '../../shared/models';

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
  articleConfig: ArticleComponentConfig = {
    isActive: false,
    isExpandedView: false,
    isTouched: false,
    canToggle: false,
    isFull: true,
  };

  selectedArticleConfig: ArticleComponentConfig = {
    isActive: false,
    isExpandedView: true,
    isTouched: false,
    canToggle: false,
    isFull: true,
  };

  isArticleOpen = false;

  private applaudsWatcherSubject$: Subject<ApplaudPayload> = new Subject();
  private applaudsWatcher$ = this.applaudsWatcherSubject$
    .asObservable()
    .pipe(debounceTime(800), distinctUntilChanged());
  isArticlesLoading$: Observable<boolean>;
  selectedArticle$: Observable<Article>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ArticlesState>,
    private router: Router,
    private toastr: ToastrService,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromAppActions.GetCurrentAudience());
    this.articles$ = this.store.pipe(select(fromArticles.getAllArticles));
    this.isArticlesLoading$ = this.store.pipe(select(fromArticles.isPublicArticlesLoading));
    this.audience$ = this.store.pipe(select(fromApp.getAudience));
    this.audienceActivities$ = this.store.pipe(
      select(fromArticles.getSelectedArticleActivities),
    );

    this.selectedArticle$ = this.store.pipe(select(fromArticles.selectArticle));

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
    if (article) {
      this.store.dispatch(new fromArticlesActions.GetOneArticle(article.id));
      this.isArticleOpen = true;
      this.currentUserApplauds = 0;
      this.updateTitleAndMeta(article);
     }
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
        select(fromArticles.getAllArticles),
        map(articles => this.filterArticlesByCategoryId(articles, categoryId)),
        tap(([article]) => {
          const  pageTitle =  !categoryId ? 'Articles and Tutorials' : this.findCategoryById(
            article.categories,
            categoryId
          ).name;

          this.store.dispatch(new SetPageTitle(pageTitle));
        }),
      );
    });
  }
  private filterArticlesByCategoryId(articles: Article[], categoryId?: number) {
    return !categoryId ?  articles : articles
      .filter(article =>
        !!this.findCategoryById(article.categories, categoryId)
      );
  }

  private findCategoryById(categories: Category[], categoryId: number) {
    return categories.find(
      cat => cat.id === categoryId,
    );
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
