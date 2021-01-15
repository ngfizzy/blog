import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleStatisticsCollection } from '../../authors-portal-shared/models';
import { DashboardGqlService } from './dashboard-gql.service';
import { ArticlesResponse } from '@ngfizzy/entities/graphql-responses';
import {
  CategoryCreationResponse,
  CategoriesSummariesResponse
} from '../../authors-portal-shared/models/graphql-responses/responses';

@Injectable()
export class DashboardService {
  constructor(private dashboardGqlService: DashboardGqlService) {}

  createCategory(category: string): Observable<CategoryCreationResponse> {
    return this.dashboardGqlService.createCategory(category);
  }

  getDashboardStatistics(): Observable<ArticleStatisticsCollection> {
    return this.dashboardGqlService.getDashboardStatistics();
  }

  getLast10Drafts() {
    return this.dashboardGqlService.getLast10Drafts();
  }

  getCategoriesSummaries(): Observable<CategoriesSummariesResponse> {
    return this.dashboardGqlService.getCategoriesSummaries();
  }

  getTop10Articles(): Observable<ArticlesResponse> {
    return this.dashboardGqlService.getTop10Articles();
  }
}
