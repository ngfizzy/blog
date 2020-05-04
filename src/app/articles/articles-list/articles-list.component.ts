import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import * as fromArticles from '../state';
import * as fromArticlesActions from '../state/articles.actions';
import * as fromAppActions from '../../core/state/core.actions';
import * as fromApp from '../../core/state';

import { ArticlesState } from '../state/articles.state';
import { Article } from '../../shared/models/article.interface';
import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';
import { Title, Meta } from '@angular/platform-browser';
import { Audience, AudienceActivity } from 'src/app/shared/models';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<Article[]>;


  private applaudsWatcherSubject$ = new Subject();
  private applaudsWatcher$ = this.applaudsWatcherSubject$.asObservable()
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
    );

  selectedArticle: Article;
  articleConfig: ArticleComponentConfig = {
    isActive: false,
    isExpandedView: false,
    isTouched: false,
    canToggle: true,
    isFull: true,
  };
  audience$: Observable<Audience>;
  audienceActivities$: Observable<AudienceActivity[]>;
  hideScrollBar: boolean;


constructor(
  private store: Store<ArticlesState>,
  private toastr: ToastrService,
  private title: Title,
  private meta: Meta,
) {}

  ngOnInit() {
    this.store.dispatch(new fromArticlesActions.GetAllArticles());
    this.store.dispatch(new fromAppActions.GetCurrentAudience());

    this.articles$ = this.store.pipe(select(fromArticles.getAllArticles));
    this.audience$ = this.store.pipe(select(fromApp.getAudience));
    this.audienceActivities$ = this.store.pipe(select(fromArticles.getSelectedArticleActivities));

    this.title.setTitle(`NgFizzy Blog - Tech`);
    this.meta.updateTag({
      name: 'Tech',
      content: 'All things software development'
    });
  }

  submitApplauds(applauds) {
    this.applaudsWatcherSubject$.next(applauds);
  }

  setSelectedArticle(article: Article) {
    this.selectedArticle = article;

    this.store.dispatch(new fromArticlesActions.GetOneArticle(article.id));

    this.updateTitleAndMeta(article);
  }

  showNotification(message: string) {
    this.toastr.info(message);
  }

  toggleScrollBar(hide: boolean) {
    document.body.style.overflowY = hide ? 'hidden' : 'auto';

    this.hideScrollBar = hide;
  }

  private updateTitleAndMeta(article: Article) {
    if (article) {
      this.title.setTitle(`NgFizzy Blog - Tech: ${article.title}`);
      this.meta.updateTag({
        name: `NgFizzy Blog - Full Article`,
        content: article.title
      });
    }
  }
}
