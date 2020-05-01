import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticlesListRoutingModule } from './articles-list-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ArticleActionsComponent } from 'src/app/shared/components/article-action/article-actions.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticlesListRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [
    ArticleActionsComponent,
    ...ArticlesListRoutingModule.routeComponents,
  ],
  providers: []
})
export class ArticlesListModule {}
