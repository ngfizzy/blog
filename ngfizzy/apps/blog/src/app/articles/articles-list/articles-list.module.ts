import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticlesListRoutingModule } from './articles-list-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, ArticlesListRoutingModule],
  exports: [RouterModule],
  declarations: [...ArticlesListRoutingModule.routeComponents],
  providers: [],
})
export class ArticlesListModule {}
