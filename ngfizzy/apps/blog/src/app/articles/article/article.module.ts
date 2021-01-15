import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...ArticleRoutingModule.routeComponents,
  ],
  providers: []
})
export class ArticleModule {}
