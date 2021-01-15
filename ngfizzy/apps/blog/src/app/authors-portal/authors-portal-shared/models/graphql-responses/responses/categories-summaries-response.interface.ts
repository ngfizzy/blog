import { CategorySummary } from '../../category-summary.interface';
import { BaseResponse } from '@ngfizzy/entities/graphql-responses';

export interface CategoriesSummariesResponse extends BaseResponse {
  categoriesSummaries: CategorySummary[];
}
