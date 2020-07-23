import { Article } from 'src/app/shared/models';
import { toggleArticlePublishedState } from '../../../services/authors-articles/mutations/toggle-article-published-state.mutation';
import { ArticleResponse, ArticlesResponse } from './articles-response.interface';



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
