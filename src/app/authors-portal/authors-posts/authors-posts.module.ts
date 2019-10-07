import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorsPostsRoutingModule } from './authors-posts-routing.module';
import { authorsPostsReducers } from './state/authors-posts.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthorsPostsEffects } from './state/authors-posts.effects';
import { AuthorsToolbarComponent } from '../authors-toolbar/authors-toolbar.component';


@NgModule({
  imports: [
    SharedModule,
    AuthorsPostsRoutingModule,
    StoreModule.forFeature('posts', authorsPostsReducers),
    EffectsModule.forFeature([ AuthorsPostsEffects ])
  ],
  declarations: [ AuthorsToolbarComponent, ...AuthorsPostsRoutingModule.routeComponents ],
})
export class AuthorsPostsModule {}
