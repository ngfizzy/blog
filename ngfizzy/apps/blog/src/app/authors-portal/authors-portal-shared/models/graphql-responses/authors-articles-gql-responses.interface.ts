import { ArticleResponse, ArticlesResponse } from './responses';

export interface EditArticleTitleResponse  {
  editArticleTitle: ArticleResponse;
}

export interface EditArticleBodyResponse {
  editArticleBody: ArticleResponse;
}

export interface TagArticleResponse {
  tagArticle: ArticleResponse;
}

export interface UntagArticleResponse {
  untagArticle: ArticleResponse;
}

export interface CreateArticleResponse {
  createArticle: ArticleResponse;
}

export interface DeleteArticleResponse {
  deleteArticle: ArticlesResponse;
}

export interface CategorizeArticleResponse {
  categorizeArticle: ArticleResponse;
}

export interface RemoveArticleFromCategoryResponse {
  removeArticleFromCategory: ArticleResponse;
}

export interface ToggleArticlePublishedStateResponse {
  toggleArticlePublishedState: ArticleResponse;
}

export interface GetAllArticlesResponse {
  getAllArticles: ArticlesResponse;
}

export interface AddThemeImage {
  addThemeImage: ArticleResponse;
}
