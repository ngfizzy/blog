import { CategorySummary } from '../../category-summary.interface';
import { BaseResponse } from './base-response.interface';

export interface CategoriesSummariesResponse extends BaseResponse {
  categoriesSummaries: CategorySummary[]
}
