import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';

import { AuthorsArticlesEffects } from './state/authors-articles.effects';
import { AuthorsArticlesRoutingModule } from './authors-articles-routing.module';
import { AuthorsArticleToolbarComponent } from './components/authors-article-toolbar/authors-article-toolbar.component';
import { AuthorsArticleListToolbarComponent } from './components/authors-article-list-toolbar/authors-article-list-toolbar.component';
import { authorsArticlesReducers } from './state/authors-articles.reducers';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorsArticlesListComponent } from './components/authors-articles-list/authors-articles-list.component';
import { AuthorsTagComponent } from './components/authors-tag/authors-tag.component';
import { AuthorsTagsPanelComponent } from './components/authors-tags-panel/authors-tags-panel.component';
import { AuthorsArticleTitleComponent } from './components/authors-article-title/authors-article-title.component';

@NgModule({
  imports: [
    SharedModule,
    LMarkdownEditorModule,
    AuthorsArticlesRoutingModule,
    StoreModule.forFeature('articles', authorsArticlesReducers),
    EffectsModule.forFeature([ AuthorsArticlesEffects ])
  ],
  declarations: [
    AuthorsArticleTitleComponent,
    AuthorsArticleToolbarComponent,
    AuthorsArticleListToolbarComponent,
    AuthorsArticleTitleComponent,
    AuthorsArticlesListComponent,
    AuthorsTagComponent,
    AuthorsTagsPanelComponent,
    ...AuthorsArticlesRoutingModule.routeComponents,
  ],
})
export class AuthorsArticlesModule {}
