import { BaseResponse } from '@ngfizzy/entities/graphql-responses';
import { Category } from '@ngfizzy/entities';
import { CategorySummary } from '../../category-summary.interface';

export interface CategoryCreationResponse extends BaseResponse {
  categories: Category[];
  categoriesSummaries: CategorySummary[];
  createdCategory: Category;
}
