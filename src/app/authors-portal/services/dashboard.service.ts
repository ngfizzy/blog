import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { ArticleStatistics } from '../authors-portal-shared/models';
import { getMostLikedArticle } from 'src/app/mock-server';
import { AuthorsArticlesService } from './authors-articles.service';

@Injectable()
export class DashboardService {
  constructor(private authorsArticlesService: AuthorsArticlesService) {

    this.authorsArticlesService.getAllArticles();
  }

  getDashboardStatistics(): Observable<ArticleStatistics[]> {
    return forkJoin([this.getMostLikedArticle()]);
  }

  private getMostLikedArticle(): Observable<ArticleStatistics> {
    return of(getMostLikedArticle());
  }
}
