import { Action } from '@ngrx/store';
import { Article } from 'src/app/shared/models/article.interface';

export const enum AuthorsArticlesActionTypes {
  CreateArticle = '[Authors Articles] Create Article',
  CreateArticleSuccess = '[Authors Articles] Create Articles Success',
  ChangeArticleStatus = '[Authors Articles] Change Article Status',
  EditArticle = '[Authors Articles] Edit Article',
  EditArticleSuccess = '[Authors Articles] Edit Article Success',
  GetArticles = '[Authors Articles] Get Articles',
  GetArticlesSuccess = '[Authors Articles] Get Articles Success',
  ViewArticle = '[Authors Articles] View Article',
  ViewArticleSuccess = '[Authors Articles] View Article Success',
  TagArticle = '[Authosr Articles] Tag Article',
  TagArticleSuccess = '[Authors Articles] Tag Article Success',
  UntagArticle = '[Authors Articles] Untag Article',
  UntagArticleSuccess = '[Authors Articles] Untag Article Success',
  EditArticleTitle = '[Authors Articles] Edit Article Title',
  EditArticleTitleSuccess = '[Authors Articles] Edit Article Title Success',
  EditArticleBody = '[Authors Articles] Edit Article Body',
  EditArticleBodySuccess = '[Authors Articles] Edit Article Body Success',
  CategorizeArticle = '[Authors Articles] Categorize Article',
  CategorizeArticleSuccess = '[Authors Articles] Cateogrize Article Success',
  RemoveArticleFromCategory = '[Authors Articles] Remove Article From Category',
  RemoveArticleFromCategorySuccess = '[Authors Articles] Remove Article From Category Success',
  TogglePublished = '[Authors Articles] Toggle Published',
  TogglePublishedSuccess = '[Authors Articles] Toggle Published Success',
}

export class GetArticles implements Action {
  readonly type = AuthorsArticlesActionTypes.GetArticles;

  constructor() {}
}

export class GetArticlesSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.GetArticlesSuccess;

  constructor(public payload: Article[]) {}
}

export class ViewArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.ViewArticle;

  constructor(public payload: number) {}
}

export class ViewArticleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.ViewArticleSuccess;

  constructor(public payload: Article) {}
}

export class CreateArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.CreateArticle;

  constructor(public payload: Partial<Article>) {}
}

export class CreateArticleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.CreateArticleSuccess;

  constructor(public payload: Article) {}
}

export class ChangeArticleStatus {
  readonly type = AuthorsArticlesActionTypes.ChangeArticleStatus;
  constructor(public readonly payload: 'saving' | 'saved' | 'erred') {}
}

export class EditArticleTitle implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleTitle;
  constructor(public payload: { title: string, articleId: number }) {}
}

export class EditArticleTitleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleTitleSuccess;

  constructor(public payload: { articles: Article[], selectedArticle: Article }) {}
}

export class EditArticleBody implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleBody;

  constructor(public payload: { body: string, articleId: number }) {}
}

export class EditArticleBodySuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleBodySuccess;

  constructor(public payload: { articles: Article[], selectedArticle: Article }) {}
}
export class TagArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.TagArticle;

  constructor(public payload: { tag: string; articleId: number}) {}
}

export class TagArticleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.TagArticleSuccess;

  constructor(public payload: { articles: Article[]; selectedArticle: Article; }) {}
}

export class UntagArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.UntagArticle;

  constructor(public payload: { tagId: number; articleId: number; }) {}
}

export class UntagArticleSuccess implements Action {
  readonly type  = AuthorsArticlesActionTypes.UntagArticleSuccess;

  constructor(public payload: { articles: Article[]; selectedArticle: Article; }) {}
}

export class CategorizeArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.CategorizeArticle;

  constructor(public payload: { category: string; articleId: number }) {}
}

export class CategorizeArticleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.CategorizeArticleSuccess;

  constructor(public payload: { articles: Article[]; selectedArticle: Article; }) {}
}

export class RemoveArticleFromCategory implements Action {
  readonly type = AuthorsArticlesActionTypes.RemoveArticleFromCategory;

  constructor(public payload: { categoryId: number; articleId: number; }) {}
}

export class RemoveArticleFromCategorySuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.RemoveArticleFromCategorySuccess;

  constructor(public payload: { articles: Article[]; selectedArticle: Article }) {}
}

export class TogglePublished implements Action {
  readonly type = AuthorsArticlesActionTypes.TogglePublished;

  constructor(public payload: { articleId: number }) {}
}

export class TogglePublishedSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.TogglePublishedSuccess;

  constructor(public payload: { articles: Article[]; selectedArticle: Article }) {}
}

export type AuthorsArticlesActions = GetArticles
| GetArticlesSuccess
| CreateArticle
| CreateArticleSuccess
| ChangeArticleStatus
| EditArticleTitle
| EditArticleTitleSuccess
| EditArticleBody
| EditArticleBodySuccess
| ViewArticle
| ViewArticleSuccess
| TagArticle
| TagArticleSuccess
| UntagArticle
| UntagArticleSuccess
| CategorizeArticle
| CategorizeArticleSuccess
| RemoveArticleFromCategory
| RemoveArticleFromCategorySuccess
| TogglePublished
| TogglePublishedSuccess;
