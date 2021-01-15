import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { CategorySummary, ArticleStatisticsCollection } from './../authors-portal-shared/models';
import {
  GetCategoriesSummaries,
  CreateCategory,
  GetMessages,
} from './../state/authors-portal.actions';
import { Article, Message } from '../../shared/models';
import {
  AuthorsPortalState,
  getArticleStatistics,
  getTop10Articles,
  getLast10Drafts,
  getCategoriesSummaries,
  isLast10DraftsLoading,
  isTop10ArticlesLoading,
  isCategoriesSummariesLoading,
  isArticleStatisticsLoading,
  selectMessages,
  isMessagesLoading
} from './../state/';

import {
  GetAuthorsDashboardArticlesStatistics,
  GetTop10Articles,
  GetLast10Drafts,
} from '../state/authors-portal.actions';
import { SetPageTitle } from '../../core/state/core.actions';
import { map, tap } from 'rxjs/operators';
import * as sharedStoreActions from '../../shared-store/shared-store.actions';
import { featuredArticles, isFeaturedArticlesLoading } from '../../shared-store';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  top10Articles$: Observable<Article[]>;
  last10Drafts$: Observable<Article[]>;
  categoriesSummaries$: Observable<CategorySummary[]>;
  isCategoryFormDisplayed: boolean;
  articlesStatistics$: Observable<ArticleStatisticsCollection>;
  isLast10DraftsLoading$: Observable<boolean>;
  isTop10ArticlesLoading$: Observable<boolean>;
  isCategoriesSummariesLoading$: Observable<boolean>;
  isArticlesStatisticsLoading$: Observable<boolean>;
  messages$: Observable<Record<string, Message>>;
  isMessagesLoading$: Observable<boolean>;
  messagesWithIndices$: Observable<{ indices: string[]; messages: Record<string, Message>; }>;
  featuredArticles$: Observable<Article[]>;
  isFeaturedArticleLoading$: Observable<boolean>;

  constructor(
    private store: Store<AuthorsPortalState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Dashboard'));

    this.initArticlesStatistics();
    this.initTop10Articles();
    this.initLast10Drafts();
    this.initFeaturedArticles();
    this.initCategoriesSummaries();

    this.initMessages();
  }

  goToArticle(article: Article) {
    this.router.navigate(['/authors/articles', article.id]);
  }

  showCategoryForm() {
    this.isCategoryFormDisplayed = true;
  }

  createNewArticle() {
    return this.router.navigate(['/authors/articles/edit/new']);
  }

  createCategory(category: string) {
    this.store.dispatch(new CreateCategory(category));
    this.isCategoryFormDisplayed = false;
  }

  private initArticlesStatistics() {
    this.store.dispatch(new GetAuthorsDashboardArticlesStatistics());
    this.articlesStatistics$ = this.store.pipe(select(getArticleStatistics));
    this.isArticlesStatisticsLoading$ = this.store.pipe(select(isArticleStatisticsLoading));
  }

  private initTop10Articles() {
    this.store.dispatch(new GetTop10Articles());

    this.top10Articles$ = this.store.pipe(select(getTop10Articles));
    this.isTop10ArticlesLoading$ = this.store.pipe(select(isTop10ArticlesLoading));
  }

  private initLast10Drafts() {
    this.store.dispatch(new GetLast10Drafts());

    this.last10Drafts$ = this.store.pipe(select(getLast10Drafts));
    this.isLast10DraftsLoading$ = this.store.pipe(select(isLast10DraftsLoading));
  }

  private initCategoriesSummaries() {
    this.store.dispatch(new GetCategoriesSummaries());

    this.categoriesSummaries$ = this.store.pipe(select(getCategoriesSummaries));
    this.isCategoriesSummariesLoading$ = this.store.pipe(select(isCategoriesSummariesLoading));
  }

  private initMessages() {
    this.store.dispatch(new GetMessages());

    this.messages$ = this.store.pipe(select(selectMessages));
    this.isMessagesLoading$ = this.store.pipe(select(isMessagesLoading));

    this.messagesWithIndices$ = this.messages$.pipe(
      map(messages => {
        const indices = Object.keys(messages).sort((a, b) =>
          (parseInt(b) - parseInt(a))
        );

        return { indices, messages };
      })
    );
  }

  private initFeaturedArticles() {
    this.store.dispatch(sharedStoreActions.getFeaturedArticles());

    this.featuredArticles$ = this.store.pipe(select(featuredArticles));
    this.isFeaturedArticleLoading$ = this.store.pipe(select(isFeaturedArticlesLoading));
  }
}
