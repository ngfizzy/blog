import { getArticleStatistics, getTop10Articles } from './../state/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthorsPortalState } from '../state';
import {
  GetAuthorsDashboardArticlesStatistics,
  GetTop10Articles,
} from '../state/authors-portal.actions';
import { ArticleStatistics } from '../authors-portal-shared/models';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  articlesStatistics$: Observable<ArticleStatistics[]>;
  top10Articles$: Observable<Article[]>;
  constructor(private store: Store<AuthorsPortalState>) {}

  ngOnInit() {
    this.store.dispatch(new GetAuthorsDashboardArticlesStatistics());
    this.articlesStatistics$ = this.store.pipe(select(getArticleStatistics));

    this.store.dispatch(new GetTop10Articles());
    this.top10Articles$ = this.store.pipe(select(getTop10Articles));
  }
}
