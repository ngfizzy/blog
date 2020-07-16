import { GQLError, Article } from 'src/app/shared/models';

export type ArticlesResponse = { articles: Article[]} & GQLError;

export interface EditArticleResponse {
  article: Article;
  error: string;
}

export interface EditArticleTitleResponse  {
  editArticleTitle: EditArticleResponse;
}

export interface EditArticleBodyResponse {
  editArticleBody: EditArticleResponse;
}

export interface TagArticleResponse {
  tagArticle: EditArticleResponse;
}

export interface UntagArticleResponse {
  untagArticle: EditArticleResponse;
}
