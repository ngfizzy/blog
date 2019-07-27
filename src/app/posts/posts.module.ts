import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/posts.effects';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [RouterModule],
  declarations: [
    ...PostsRoutingModule.routeComponents,
  ],
  providers: [PostsService]
})
export class PostsModule {}
