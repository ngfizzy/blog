import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, mergeMap, take, tap, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/shared/models/article.interface';

import * as fromAuthorsArticlesState from '../../authors-articles/state';
import { UnknownObjectPath } from '../../../shared/Exceptions';
import { AuthorsArticlesGQLService } from './authors-articles-gql.service';
import { ArticleResponse, ArticlesResponse } from '../../authors-portal-shared/models/graphql-responses';
import {
  EditArticleEffectResponse,

} from '../../authors-portal-shared/models';

const enum EditableArticlePaths {
  Title = 'title',
  Body = 'body',
  Tags = 'tags',
  Categories = 'categories',
  Published = 'published',
}

@Injectable()
export class AuthorsArticlesService {

  constructor(
    private store: Store<fromAuthorsArticlesState.AuthorsArticlesState>,
    private articlesGqlService: AuthorsArticlesGQLService,
  ) {}

  createArticle(title: string, body: string): Observable<ArticleResponse> {
    return this.articlesGqlService.createArticle(title, body);
  }

  deleteArticle(articleId: number): Observable<ArticlesResponse> {
    return this.articlesGqlService.deleteArticle(articleId);
  }

  editArticleTitle(
    title: string,
    articleId: number,
  ): Observable<EditArticleEffectResponse> {
    return this.editArticlePath(articleId, EditableArticlePaths.Title, title);
  }

  editArticleBody(body: string, articleId: number): Observable<EditArticleEffectResponse> {
    return this.editArticlePath(articleId, EditableArticlePaths.Body, body);
  }

  tagArticle(tag: string, articleId: number): Observable<EditArticleEffectResponse> {
    return this.editArticlePath(articleId, EditableArticlePaths.Tags, tag);
  }

  untagArticle(tagId: number, articleId: number) {
    return this.editArticlePath(articleId, EditableArticlePaths.Tags, tagId);
  }

  categorizeArticle(articleId: number, categoryName: string): Observable<EditArticleEffectResponse> {
    return this.editArticlePath(
      articleId,
      EditableArticlePaths.Categories,
      categoryName,
    );
  }

  removeArticleFromCategory(articleId: number, categoryId: number) {
    return this.editArticlePath(
      articleId,
      EditableArticlePaths.Categories,
      categoryId,
    );
  }


  toggleArticlePublishedState(articleId: number): Observable<EditArticleEffectResponse> {
    return this.editArticlePath(
      articleId,
      EditableArticlePaths.Published,
      null,
    );
  }

  private editArticlePath(
    articleId: number,
    path: EditableArticlePaths,
    newPathValue: any,
  ): Observable<any> {
    return this.pluckArticleFromStore(articleId).pipe(
      switchMap(pluckResult => {
        const { plucked } = pluckResult;

        const articles = [...pluckResult.articles];

        if (!plucked) {
          return of({ articles, selectedArticle: plucked });
        }

        let response$: Observable<ArticleResponse>;

        switch (path) {
          case EditableArticlePaths.Body:
            response$ = this.articlesGqlService
              .editArticleBody(articleId, newPathValue);
            break;
          case EditableArticlePaths.Title:
            response$ = this.articlesGqlService
              .editArticleTitle(articleId, newPathValue);
            break;
          case EditableArticlePaths.Tags:
            response$ =
              typeof newPathValue === 'string'
                ? this.articlesGqlService.tagArticle(articleId, newPathValue)
                : this.articlesGqlService.untagArticle(articleId, newPathValue);
            break;
          case EditableArticlePaths.Categories:
            response$ =
              typeof newPathValue === 'string'
                ? this.articlesGqlService.categorizeArticle(articleId, newPathValue)
                : this.articlesGqlService.removeArticleFromCategory(articleId, newPathValue);
            break;
          case EditableArticlePaths.Published:
            response$ = this.articlesGqlService.toggleArticlePublishedState(articleId);
            break;
          default:
            const message = `Cannot update property ${path} because it doesn't exist`;
            throw new UnknownObjectPath(path, message);
        }

        return response$.pipe(map(response => {
          const index = articles.findIndex(a => response.article.id === a.id);
          articles.splice(index, 1, response.article);

          return { articles, selectedArticle: response.article, error: response.error };
        }));

      }),
    );
  }

  getAllArticles() {
    return this.articlesGqlService.getAllArticles();
  }

  getOneArticle(articleId: number) {
    return this.getArticlesFromStore().pipe(
      mergeMap(articles => {
        const article = articles.find(found => found.id === articleId);

        return of(article);
      }),
    );
  }

  private pluckArticle(articleId: number, articles: Article[]): Article {
    const art = [...articles];
    const articleIndex = art.findIndex(found => found.id === +articleId);
    const [article] = art.splice(articleIndex, 1);

    return article;
  }

  private getArticlesFromStore() {
    return this.store.pipe(
      select(fromAuthorsArticlesState.getArticles),
      take(1),
    );
  }

  private pluckArticleFromStore(articleId: number) {
    return this.getArticlesFromStore().pipe(
      map(articles => {
        const plucked = this.pluckArticle(articleId, articles);
        return { articles, plucked };
      }),
    );
  }
}
