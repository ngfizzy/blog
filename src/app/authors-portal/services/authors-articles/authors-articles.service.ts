import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, mergeMap, take, tap, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/shared/models/article.interface';
import {
  createArticle,
  tagArticle,
  untagArticle,
  categorizeArticle,
  removeArticleFromCategory,
  toggleArticlePublishedState,
  getAllArticles,
} from '../../../mock-server';
import * as fromAuthorsArticlesState from '../../authors-articles/state';
import { UnknownObjectPath } from '../../../shared/Exceptions';
import { AuthorsArticlesGQLService } from './authors-articles-gql.service';
import { EditArticleResponse } from '../../authors-portal-shared/models';
import { editArticleTitle } from './mutations/edit-article-title.mutation';
import { editArticleBody } from '../../../mock-server/index';
import { EditArticleEffectResponse } from '../../authors-portal-shared/models/edit-article-effect-response';

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

  createArticle(article: Partial<Article>): Observable<Article> {
    return of(
      createArticle({
        body: article.body,
        title: article.title,
      }),
    );
  }

  editArticleTitle(
    title: string,
    articleId: number,
  ): Observable<EditArticleEffectResponse> {
    return this.editArticlePath(articleId, EditableArticlePaths.Title, title);
  }

  editArticleBody(body: string, articleId: number) {
    return this.editArticlePath(articleId, EditableArticlePaths.Body, body);
  }

  tagArticle(tag: string, articleId: number) {
    return this.editArticlePath(articleId, EditableArticlePaths.Tags, tag);
  }

  untagArticle(tagId: number, articleId: number) {
    return this.editArticlePath(articleId, EditableArticlePaths.Tags, tagId);
  }

  categorizeArticle(articleId: number, categoryName: string) {
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

  toggleArticlePublishedState(articleId: number) {
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
        const { articles, plucked } = pluckResult;

        if (!plucked) {
          return of({ articles, selectedArticle: plucked });
        }

        let response$: Observable<EditArticleResponse>;

        switch (path) {
          // case EditableArticlePaths.Body:
          //   article = editArticleBody(articleId, newPathValue);
          //   break;
          case EditableArticlePaths.Title:
            response$ = this.articlesGqlService
              .editArticleTitle(articleId, newPathValue);

          // case EditableArticlePaths.Tags:
          //   article =
          //     typeof newPathValue === 'string'
          //       ? tagArticle(newPathValue, articleId)
          //       : untagArticle(newPathValue, articleId);
            break;
          // case EditableArticlePaths.Categories:
          //   article =
          //     typeof newPathValue === 'string'
          //       ? categorizeArticle(articleId, newPathValue)
          //       : removeArticleFromCategory(articleId, newPathValue);
          //   break;
          // case EditableArticlePaths.Published:
          //   article = toggleArticlePublishedState(articleId);
          //   break;
          default:
            const message = `Cannot update property ${path} because it doesn't exist`;
            throw new UnknownObjectPath(path, message);
        }

        return response$.pipe(map(response => {
          articles.unshift(response.article);

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
    const articleIndex = articles.findIndex(found => found.id === +articleId);
    const [article] = articles.splice(articleIndex, 1);

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
