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
import { AuthorsTagComponent } from './components/authors-tag/authors-tag.component';
import { AuthorsTagsPanelComponent } from './components/authors-tags-panel/authors-tags-panel.component';
import { AuthorsPostTitleComponent } from './components/authors-post-title/authors-post-title.component';

@NgModule({
  imports: [
    SharedModule,
    LMarkdownEditorModule,
    AuthorsPostsRoutingModule,
    StoreModule.forFeature('posts', authorsPostsReducers),
    EffectsModule.forFeature([ AuthorsPostsEffects ])
  ],
  declarations: [
    AuthorsPostTitleComponent,
    AuthorsPostToolbarComponent,
    AuthorsPostListToolbarComponent,
    AuthorsPostTitleComponent,
    AuthorsPostsListComponent,
    AuthorsTagComponent,
    AuthorsTagsPanelComponent,
    ...AuthorsPostsRoutingModule.routeComponents,
  ],
})
export class AuthorsPostsModule {}
