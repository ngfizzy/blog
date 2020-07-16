import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { articlesQuery } from './queries';
import { editArticleTitle, editArticleBody, tagArticle } from './mutations';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ArticlesResponse, EditArticleResponse } from '../../authors-portal-shared/models';
import { UntagArticleResponse } from '../../authors-portal-shared/models/gql-responses.interface';
import { untagArticle } from './mutations/untag-article.mutation';
import {
  EditArticleTitleResponse,
  EditArticleBodyResponse,
  TagArticleResponse
} from '../../authors-portal-shared/models/gql-responses.interface';


@Injectable()
export class AuthorsArticlesGQLService {

  constructor(private apollo: Apollo) {}

  getAllArticles(): Observable<ArticlesResponse> {
    return this.apollo.watchQuery<ArticlesResponse>({
      query: articlesQuery,
    }).valueChanges.pipe(map(response => response.data));
  }

  editArticleTitle(articleId: number, title: string) {
    return this.apollo.mutate<EditArticleTitleResponse>({
      mutation: editArticleTitle,
      variables: {
        articleId,
        value: title
      }
    }).pipe(map(response => response.data.editArticleTitle));
  }

  editArticleBody(articleId: number, title: string) {
    return this.apollo.mutate<EditArticleBodyResponse>({
      mutation: editArticleBody,
      variables: {
        articleId,
        value: title,
      },
    }).pipe(map(response => response.data.editArticleBody));
  }

  tagArticle(articleId: number, tagName: string) {
    return this.apollo.mutate<TagArticleResponse>({
      mutation: tagArticle,
      variables: {
        articleId,
        tagName,
      }
    }).pipe(map(response => response.data.tagArticle));
  }

  untagArticle(articleId: number, tagId: number) {
    return this.apollo.mutate<UntagArticleResponse>({
      mutation: untagArticle,
      variables: {
        articleId,
        tagId,
      }
    }).pipe(map(response => response.data.untagArticle));
  }
}
