import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { OnePostRoutingModule } from './one-post-routing.module';
import { StoreModule } from '@ngrx/store';
import { onePostReducer } from './state/one-post.reducer';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './state/one-post.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OnePostRoutingModule,
    StoreModule.forFeature('post', onePostReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [RouterModule],
  declarations: [
    ...OnePostRoutingModule.routeComponents,
  ],
  providers: []
})
export class OnePostModule {}
