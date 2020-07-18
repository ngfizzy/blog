import { GQLError, Article } from 'src/app/shared/models';

export type ArticlesResponse = { articles: Article[]} & GQLError;

export interface ArticleResponse {
  article: Article;
  error: string;
}

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
