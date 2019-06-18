import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', postsReducer),
  ],
  exports: [RouterModule],
  declarations: [
    ...PostsRoutingModule.routeComponents,
  ]
})
export class PostModule {}
