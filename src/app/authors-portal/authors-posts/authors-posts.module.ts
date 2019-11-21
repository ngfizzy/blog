import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { AuthorsPostsEffects } from './state/authors-posts.effects';
import { AuthorsPostsRoutingModule } from './authors-posts-routing.module';
import { AuthorsPostToolbarComponent } from './components/authors-post-toolbar/authors-post-toolbar.component';
import { AuthorsPostListToolbarComponent } from './components/authors-post-list-toolbar/authors-post-list-toolbar.component';
import { authorsPostsReducers } from './state/authors-posts.reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorsPostsListComponent } from './components/authors-posts-list/authors-posts-list.component';

@NgModule({
  imports: [
    SharedModule,
    LMarkdownEditorModule,
    AuthorsPostsRoutingModule,
    StoreModule.forFeature('posts', authorsPostsReducers),
    EffectsModule.forFeature([ AuthorsPostsEffects ])
  ],
  declarations: [
    AuthorsPostToolbarComponent,
    AuthorsPostListToolbarComponent,
    AuthorsPostsListComponent,
    ...AuthorsPostsRoutingModule.routeComponents,
  ],
})
export class AuthorsPostsModule {}
