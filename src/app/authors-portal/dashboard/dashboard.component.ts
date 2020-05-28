import { getArticleStatistics } from './../state/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthorsPortalState } from '../state';
import { GetAuthorsDashboardArticlesStatistics } from '../state/authors-portal.actions';
import { ArticleStatistics } from '../authors-portal-shared/models';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  articlesStatistics$: Observable<ArticleStatistics[]>;
  constructor(private store: Store<AuthorsPortalState>) {}

  ngOnInit() {
    this.store.dispatch(new GetAuthorsDashboardArticlesStatistics());
    this.articlesStatistics$ = this.store.pipe(select(getArticleStatistics));
  }
}
