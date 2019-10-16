import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';


import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { authorsPortalReducer } from './state/authors-portal.reducer';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LMarkdownEditorModule,
    AuthorsPortalRoutingModule,
    StoreModule.forFeature('authorsPortal', authorsPortalReducer),
    EffectsModule.forFeature([ ]),
  ],
  providers: [
    AuthGuard,
    AuthService,
  ],
  declarations: [
    ...AuthorsPortalRoutingModule.moduleComponents
  ],
})
export class AuthorsPortal {

}
