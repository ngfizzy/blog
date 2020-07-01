import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import {
  ArticleStatistics,
  CategorySummary,
} from '../authors-portal-shared/models';
import {
  getMostLikedArticle,
  getArticleWithMostComments,
  getMostPopularArticle,
  getTop10Articles,
  getLast10DraftArticles,
  getCategoriesSummaries,
  createCategory,
} from 'src/app/mock-server';
import { AuthorsArticlesService } from './authors-articles/authors-articles.service';
import { Article } from 'src/app/shared/models';

@Injectable()
export class DashboardService {
  constructor(private authorsArticlesService: AuthorsArticlesService) {
    this.authorsArticlesService.getAllArticles();
  }

  createCategory(category: string) {
    return of(createCategory(category));
  }

  getDashboardStatistics(): Observable<ArticleStatistics[]> {
    return forkJoin([
      this.getMostLikedArticle(),
      this.getArticleWithMostComments(),
      this.getMostPopularArticle(),
    ]);
  }

  getLast10Drafts() {
    return of(getLast10DraftArticles());
  }

  getCategoriesSummaries(): Observable<CategorySummary[]> {
    return of(getCategoriesSummaries());
  }

  getTop10Articles(): Observable<Article[]> {
    return of(getTop10Articles());
  }
  private getMostPopularArticle(): Observable<ArticleStatistics> {
    return of(getMostPopularArticle());
  }

  private getArticleWithMostComments(): Observable<ArticleStatistics> {
    return of(getArticleWithMostComments());
  }

  private getMostLikedArticle(): Observable<ArticleStatistics> {
    return of(getMostLikedArticle());
  }
}
