import { BaseResponse } from '@ngfizzy/entities/graphql-responses';
import { Article } from '@ngfizzy/entities';

type Poem = Article;
export interface PoemsResponse extends BaseResponse {
  poems: Poem[];
}

export interface PoemResponse extends BaseResponse {
  poem: Poem;
}
