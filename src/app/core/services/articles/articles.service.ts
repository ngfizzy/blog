import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Article } from '../../../shared/models';
import { ApplaudPayload, CommentPayload } from '../../../shared/models';
import { ArticlesGqlService } from './articles-gql.service';
import {
  ArticlesResponse,
  AudienceActivitiesResponse,
  ArticleResponse
} from 'src/app/shared/models/graphql-responses/responses';
import { ArticlesState } from 'src/app/articles/state/articles.state';
import { getAllArticles } from 'src/app/articles/state';

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
    )
  }

  getFeaturedArticles() {
    return this.articlesGqlService.getFeaturedArticles()
  }

  applaud(applaudPayload: ApplaudPayload) {
    return this.articlesGqlService.applaud(applaudPayload);
  }

  addComment(commentPayload: CommentPayload): Observable<AudienceActivitiesResponse> {
    return this.articlesGqlService.addComment(commentPayload);
  }
}
