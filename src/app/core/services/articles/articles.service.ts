import { CommentPayload } from '../../../shared/models/audience-activity-payloads.interface';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Article } from '../../../shared/models/article.interface';
import { getAllArticles, applaud, addComment } from '../../../mock-server';
import { ApplaudPayload } from '../../../shared/models';
import { ArticlesGqlService } from './articles-gql.service';
import { ArticlesResponse, AudienceActivitiesResponse } from 'src/app/shared/models/graphql-responses/responses';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  articles: Article[];

  constructor(private articlesGqlService: ArticlesGqlService) {
    this.articles = getAllArticles();
  }

  getAll(): Observable<ArticlesResponse> {
    return this.articlesGqlService.getAllArticles();
  }

  getOne(articleId: number): Observable<Article> {
    const article = this.articles.find(
      found => articleId === found.id && found.published === true,
    );

    return of(article);
  }

  applaud(applaudPayload: ApplaudPayload) {
    return this.articlesGqlService.applaud(applaudPayload);
  }

  addComment(commentPayload: CommentPayload): Observable<AudienceActivitiesResponse> {
    // const audienceActivity: any = addComment(commentPayload);

    // return of(audienceActivity);

    return this.articlesGqlService.addComment(commentPayload);
  }
}
