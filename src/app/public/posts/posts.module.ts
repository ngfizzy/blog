import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...PostsRoutingModule.routeComponents,
  ],
  providers: []
})
export class PostsModule {}
