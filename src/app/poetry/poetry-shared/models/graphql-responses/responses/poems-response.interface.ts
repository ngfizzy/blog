import { BaseResponse } from 'src/app/shared/models/graphql-responses/responses';
import { Article } from 'src/app/shared/models';

type Poem = Article;
export interface PoemsResponse extends BaseResponse {
  poems: Poem[];
}

export interface PoemResponse extends BaseResponse {
  poem: Poem;
}
