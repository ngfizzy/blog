import { Action } from '@ngrx/store';
import { Article } from 'src/app/shared/models/article.interface';
import {
  EditArticleEffectResponse,
  ArticlesResponse,
  ArticleResponse
} from '../../authors-portal-shared/models';


export const enum AuthorsArticlesActionTypes {
  CreateArticle = '[Authors Articles] Create Article',
  CreateArticleError = '[Authors Articles] Create Article Error',
  CreateArticleSuccess = '[Authors Articles] Create Articles Success',
  ChangeArticleStatus = '[Authors Articles] Change Article Status',
  EditArticle = '[Authors Articles] Edit Article',
  DeleteArticle = '[Authors Articles] Delete Article',
  DeleteArticleSuccess = '[Authors Articles] Delete Article Success',
  DeleteArticleError = '[Delete Articles] Delete Article Error',
  EditArticleSuccess = '[Authors Articles] Edit Article Success',
  GetArticles = '[Authors Articles] Get Articles',
  GetArticlesSuccess = '[Authors Articles] Get Articles Success',
  GetArticlesError = '[Authors Articles] Get Articles Error',
  ViewArticle = '[Authors Articles] View Article',
  ViewArticleSuccess = '[Authors Articles] View Article Success',
  TagArticle = '[Authors Articles] Tag Article',
  TagArticleError = '[Authors Articles] Tag Article Error',
  TagArticleSuccess = '[Authors Articles] Tag Article Success',
  UntagArticle = '[Authors Articles] Untag Article',
  UntagArticleSuccess = '[Authors Articles] Untag Article Success',
  UntagArticleError = '[Authors Articles] Untag Article Error',
  EditArticleTitle = '[Authors Articles] Edit Article Title',
  EditArticleTitleSuccess = '[Authors Articles] Edit Article Title Success',
  EditArticleTitleError = '[Authors Articles] Edit ARticle Title Error',
  EditArticleBody = '[Authors Articles] Edit Article Body',
  EditArticleBodyError = '[Authors Articles] Edit Article Body Error',
  EditArticleBodySuccess = '[Authors Articles] Edit Article Body Success',
  CategorizeArticle = '[Authors Articles] Categorize Article',
  CategorizeArticleSuccess = '[Authors Articles] Categorize Article Success',
  CategorizeArticleError = '[Authors Articles] Categorize Article Error',
  RemoveArticleFromCategory = '[Authors Articles] Remove Article From Category',
  RemoveArticleFromCategorySuccess = '[Authors Articles] Remove Article From Category Success',
  RemoveArticleFromCategoryError = '[Authors Articles] Remove Article From Category Error',
  TogglePublished = '[Authors Articles] Toggle Published',
  TogglePublishedSuccess = '[Authors Articles] Toggle Published Success',
  TogglePublishedError = '[Authors Articles] Toggle Published Error'
}

export class GetArticles implements Action {
  readonly type = AuthorsArticlesActionTypes.GetArticles;

  constructor() {}
}

export class GetArticlesError implements Action {
  readonly type = AuthorsArticlesActionTypes.GetArticlesError;

  constructor(public payload: string) {}
}

export class GetArticlesSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.GetArticlesSuccess;

  constructor(public payload: ArticlesResponse) {}
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

  constructor(public payload: ArticleResponse) {}
}

export class CreateArticleError implements Action {
  readonly type = AuthorsArticlesActionTypes.CreateArticleError;

  constructor(public payload: string) {}
}

export class DeleteArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.DeleteArticle;

  constructor(public payload: number) {}
}

export class DeleteArticleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.DeleteArticleSuccess;

  constructor(public payload: ArticlesResponse) {}
}

export class DeleteArticleError implements Action {
  readonly type = AuthorsArticlesActionTypes.DeleteArticleError;

  constructor(public payload: string) {}
}

export class ChangeArticleStatus {
  readonly type = AuthorsArticlesActionTypes.ChangeArticleStatus;
  constructor(public readonly payload: 'saving' | 'saved' | 'erred') {}
}

export class EditArticleTitle implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleTitle;
  constructor(public payload: { title: string, articleId: number }) {}
}

export class EditArticleTitleError implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleTitleError;

  constructor(public payload: string) {}
}

export class EditArticleTitleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleTitleSuccess;

  constructor(public payload: EditArticleEffectResponse) {}
}

export class EditArticleBody implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleBody;

  constructor(public payload: { body: string, articleId: number }) {}
}

export class EditArticleBodyError implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleBodyError;

  constructor(public payload: string) {}
}

export class EditArticleBodySuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.EditArticleBodySuccess;

  constructor(public payload: EditArticleEffectResponse) {}
}
export class TagArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.TagArticle;

  constructor(public payload: { tag: string; articleId: number}) {}
}

export class TagArticleSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.TagArticleSuccess;

  constructor(public payload: EditArticleEffectResponse) {}
}

export class TagArticleError implements Action {
  readonly type = AuthorsArticlesActionTypes.TagArticleError;

  constructor(public payload: string) {}
}

export class UntagArticle implements Action {
  readonly type = AuthorsArticlesActionTypes.UntagArticle;

  constructor(public payload: { tagId: number; articleId: number; }) {}
}

export class UntagArticleError implements Action {
  readonly type = AuthorsArticlesActionTypes.UntagArticleError;

  constructor(public payload: string) {}
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

  constructor(public payload: EditArticleEffectResponse) {}
}

export class CategorizeArticleError implements Action {
  readonly type = AuthorsArticlesActionTypes.CategorizeArticleError;

  constructor(public payload: string) {}
}
export class RemoveArticleFromCategory implements Action {
  readonly type = AuthorsArticlesActionTypes.RemoveArticleFromCategory;

  constructor(public payload: { categoryId: number; articleId: number; }) {}
}

export class RemoveArticleFromCategorySuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.RemoveArticleFromCategorySuccess;

  constructor(public payload: EditArticleEffectResponse) {}
}

export class RemoveArticleFromCategoryError implements Action {
  readonly type = AuthorsArticlesActionTypes.RemoveArticleFromCategoryError;

  constructor(public payload: string) {}
}
export class TogglePublished implements Action {
  readonly type = AuthorsArticlesActionTypes.TogglePublished;

  constructor(public payload: { articleId: number }) {}
}

export class TogglePublishedSuccess implements Action {
  readonly type = AuthorsArticlesActionTypes.TogglePublishedSuccess;

  constructor(public payload: EditArticleEffectResponse) {}
}

export class TogglePublishedError implements Action {
  readonly type = AuthorsArticlesActionTypes.TogglePublishedError;

  constructor(public payload: string) {}
}

export type AuthorsArticlesActions = GetArticles
| GetArticlesSuccess
| CreateArticle
| CreateArticleError
| CreateArticleSuccess
| ChangeArticleStatus
| DeleteArticle
| DeleteArticleSuccess
| DeleteArticleError
| EditArticleTitle
| EditArticleTitleSuccess
| EditArticleTitleError
| EditArticleBody
| EditArticleBodyError
| EditArticleBodySuccess
| ViewArticle
| ViewArticleSuccess
| TagArticle
| TagArticleSuccess
| UntagArticle
| UntagArticleSuccess
| CategorizeArticle
| CategorizeArticleSuccess
| CategorizeArticleError
| RemoveArticleFromCategory
| RemoveArticleFromCategorySuccess
| RemoveArticleFromCategoryError
| TogglePublished
| TogglePublishedSuccess
| TogglePublishedError
| GetArticlesError;
