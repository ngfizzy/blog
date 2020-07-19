import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { articlesQuery } from './queries';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as mutations from './mutations';
import * as iGraphqlResponses from '../../authors-portal-shared/models/gql-responses.interface';

@Injectable()
export class AuthorsArticlesGQLService {

  constructor(private apollo: Apollo) {}

  createArticle(title: string, body: string) {
    return this.apollo.mutate<iGraphqlResponses.CreateArticleResponse>({
      mutation: mutations.createArticle,
      variables: {
        title,
        body
      },
    }).pipe(map(response => response.data.createArticle));
  }

  deleteArticle(articleId: number) {
    return this.apollo.mutate<iGraphqlResponses.DeleteArticleResponse>({
      mutation: mutations.deleteArticle,
      variables: {
        articleId,
      },
    }).pipe(map(response => response.data.deleteArticle));
  }

  getAllArticles(): Observable<iGraphqlResponses.ArticlesResponse> {
    return this.apollo.watchQuery<iGraphqlResponses.ArticlesResponse>({
      query: articlesQuery,
    }).valueChanges.pipe(map(response => response.data));
  }

  editArticleTitle(articleId: number, title: string) {
    return this.apollo.mutate<iGraphqlResponses.EditArticleTitleResponse>({
      mutation: mutations.editArticleTitle,
      variables: {
        articleId,
        value: title
      }
    }).pipe(map(response => response.data.editArticleTitle));
  }

  editArticleBody(articleId: number, title: string) {
    return this.apollo.mutate<iGraphqlResponses.EditArticleBodyResponse>({
      mutation: mutations.editArticleBody,
      variables: {
        articleId,
        value: title,
      },
    }).pipe(map(response => response.data.editArticleBody));
  }

  tagArticle(articleId: number, tagName: string) {
    return this.apollo.mutate<iGraphqlResponses.TagArticleResponse>({
      mutation: mutations.tagArticle,
      variables: {
        articleId,
        tagName,
      }
    }).pipe(map(response => response.data.tagArticle));
  }

  untagArticle(articleId: number, tagId: number) {
    return this.apollo.mutate<iGraphqlResponses.UntagArticleResponse>({
      mutation: mutations.untagArticle,
      variables: {
        articleId,
        tagId,
      }
    }).pipe(map(response => response.data.untagArticle));
  }

  categorizeArticle(articleId: number, categoryName: string) {
    return this.apollo.mutate<iGraphqlResponses.CategorizeArticleResponse>({
      mutation: mutations.categorizeArticle,
      variables: {
        articleId,
        categoryName,
      },
    }).pipe(map(response => response.data.categorizeArticle));
  }

  removeArticleFromCategory(articleId: number, categoryId: number) {
    return this.apollo.mutate<iGraphqlResponses.RemoveArticleFromCategoryResponse>({
      mutation: mutations.removeArticleFromCategory,
      variables: {
        articleId,
        categoryId,
      },
    }).pipe(map(response => response.data.removeArticleFromCategory));
  }
}
