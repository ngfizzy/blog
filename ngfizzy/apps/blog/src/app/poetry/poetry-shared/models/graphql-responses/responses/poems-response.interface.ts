import { BaseResponse } from '../../../../../shared/models/graphql-responses/responses';
import { Article } from '../../../../../shared/models';

type Poem = Article;
export interface PoemsResponse extends BaseResponse {
  poems: Poem[];
}

export interface PoemResponse extends BaseResponse {
  poem: Poem;
}
