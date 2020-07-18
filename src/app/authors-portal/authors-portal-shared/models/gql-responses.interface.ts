import { Article } from 'src/app/shared/models';

export interface ArticlesResponse {
  articles: Article[];
  error: string;
}

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

export interface DeleteArticleResponse {
  deleteArticle: ArticlesResponse;
}
