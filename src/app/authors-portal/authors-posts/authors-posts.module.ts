import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthorsPostsRoutingModule } from './authors-posts-routing.module';
import { AuthorsPostsEffects } from './state/authors-posts.effects';
import { AuthorsPostToolbarComponent } from './components/authors-post-toolbar/authors-post-toolbar.component';
import { authorsPostsReducers } from './state/authors-posts.reducers';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AuthorsPostsRoutingModule,
    StoreModule.forFeature('posts', authorsPostsReducers),
    EffectsModule.forFeature([ AuthorsPostsEffects ])
  ],
  declarations: [ AuthorsPostToolbarComponent, ...AuthorsPostsRoutingModule.routeComponents ],
})
export class AuthorsPostsModule {}
