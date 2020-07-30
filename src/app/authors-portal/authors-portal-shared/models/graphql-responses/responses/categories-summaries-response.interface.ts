import { CategorySummary } from '../../category-summary.interface';
import { BaseResponse } from '../../../../../shared/models/graphql-responses/responses/base-response.interface';

export interface CategoriesSummariesResponse extends BaseResponse {
  categoriesSummaries: CategorySummary[]
}
