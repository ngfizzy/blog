import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Article } from '@ngfizzy/entities';
import { ApplaudPayload, CommentPayload } from '@ngfizzy/entities';
import { ArticlesGqlService } from './articles-gql.service';
import {
  ArticlesResponse,
  AudienceActivitiesResponse,
  ArticleResponse
} from '@ngfizzy/entities/graphql-responses';
import { ArticlesState } from '../../../articles/state/articles.state';
import { getAllArticles } from '../../../articles/state';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  articles: Article[];

  constructor(
    private articlesGqlService: ArticlesGqlService,
    private store: Store<ArticlesState>
  ) {
  }

  getAll(): Observable<ArticlesResponse> {
    return this.articlesGqlService.getAllArticles();
  }

  getOne(articleId: number): Observable<ArticleResponse> {
    return this.store.pipe(
      select(getAllArticles),
      switchMap((articles) => {
        const article = articles.find(article => article.id === articleId);

        if (article) {
          return of({article});
        }

        return this.articlesGqlService.getOneArticle(articleId);
      })
    );
  }

  getFeaturedArticles() {
    return this.articlesGqlService.getFeaturedArticles();
  }

  applaud(applaudPayload: ApplaudPayload) {
    return this.articlesGqlService.applaud(applaudPayload);
  }

  addComment(commentPayload: CommentPayload): Observable<AudienceActivitiesResponse> {
    return this.articlesGqlService.addComment(commentPayload);
  }
}
