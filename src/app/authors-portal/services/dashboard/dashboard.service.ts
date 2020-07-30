import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import {
  ArticleStatistics,
  CategorySummary,
  ArticleStatisticsCollection,
} from '../../authors-portal-shared/models';
import {
  getMostLikedArticle,
  getArticleWithMostComments,
  getMostPopularArticle,
  getTop10Articles,
  getLast10DraftArticles,
  getCategoriesSummaries,
  createCategory,
} from 'src/app/mock-server';
import { AuthorsArticlesService } from '../authors-articles/authors-articles.service';
import { DashboardGqlService } from './dashboard-gql.service';
import { ArticlesResponse } from '../../../shared/models/graphql-responses/responses/articles-response.interface';
import { CategoriesSummariesResponse } from '../../authors-portal-shared/models/graphql-responses/responses/categories-summaries-response.interface';
import { CategoryCreationResponse } from '../../authors-portal-shared/models/graphql-responses/responses';
import { tap } from 'rxjs/operators';

@Injectable()
export class DashboardService {
  constructor(
    private authorsArticlesService: AuthorsArticlesService,
    private dashboardGqlService: DashboardGqlService,
    ) {}

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
