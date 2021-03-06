import {Apollo} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';

import * as iGqlResponses from '@ngfizzy/entities/graphql-responses';
import * as queries from './queries';
import * as mutations from './mutations';
import { ApplaudPayload, CommentPayload } from '@ngfizzy/entities';

@Injectable({ providedIn: 'root' })
export class ArticlesGqlService {
  constructor(private apollo: Apollo) {}

  getAllArticles() {
    return this.apollo.watchQuery<iGqlResponses.GetPublishedArticlesResponse>({
      query: queries.getPublishedArticles,
    }).valueChanges.pipe(map(response => response.data.getPublishedArticles));
  }

  getOneArticle(articleId: number) {
    return this.apollo.watchQuery<iGqlResponses.GetOnePublishedArticleResponse>({
      query: queries.getOnePublishedArticle,
      variables: { articleId }
    }).valueChanges.pipe(map(response => response.data.getOnePublishedArticle));
  }

  applaud(applaudPayload: ApplaudPayload) {
    return this.apollo.mutate<iGqlResponses.ApplaudResponse>({
      mutation: mutations.applaud,
      variables: {
        applaudPayload,
      }
    }).pipe(map(response => response.data.applaud));
  }

  addComment(commentPayload: CommentPayload) {
    return this.apollo.mutate<iGqlResponses.AddCommentResponse>({
      mutation: mutations.addComment,
      variables: {
        commentPayload
      }
    }).pipe(map(response => response.data.addComment));
  }

  getFeaturedArticles() {
    return this.apollo.watchQuery<iGqlResponses.GetFeaturedArticlesResponse>({
      query: queries.getFeaturedArticles
    }).valueChanges.pipe(map(response => response.data.getFeaturedArticles));
  }
}
