import { CategorySummary } from './../authors-portal-shared/models/category-summary.interface';
import { GetCategoriesSummaries } from './../state/authors-portal.actions';
import {
  getArticleStatistics,
  getTop10Articles,
  getLast10Drafts,
  getCategoriesSummaries,
} from './../state/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthorsPortalState } from '../state';
import {
  GetAuthorsDashboardArticlesStatistics,
  GetTop10Articles,
  GetLast10Drafts,
} from '../state/authors-portal.actions';
import { ArticleStatistics } from '../authors-portal-shared/models';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  articlesStatistics$: Observable<ArticleStatistics[]>;
  top10Articles$: Observable<Article[]>;
  last10Drafts$: Observable<Article[]>;
  categoriesSummaries$: Observable<CategorySummary[]>;

  constructor(
    private store: Store<AuthorsPortalState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetAuthorsDashboardArticlesStatistics());
    this.articlesStatistics$ = this.store.pipe(select(getArticleStatistics));

    this.store.dispatch(new GetTop10Articles());
    this.top10Articles$ = this.store.pipe(select(getTop10Articles));

    this.store.dispatch(new GetLast10Drafts());
    this.last10Drafts$ = this.store.pipe(select(getLast10Drafts));

    this.store.dispatch(new GetCategoriesSummaries());

    this.categoriesSummaries$ = this.store.pipe(select(getCategoriesSummaries));
  }

  createNewArticle() {
    return this.router.navigate(['/authors/articles/edit/new']);
  }
}
