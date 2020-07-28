import { BaseResponse } from './base-response.interface';
import { Category } from 'src/app/shared/models';
import { CategorySummary } from '../../category-summary.interface';

export interface CategoryCreationResponse extends BaseResponse {
  categories: Category[];
  categoriesSummaries: CategorySummary[];
  createdCategory: Category;
}
