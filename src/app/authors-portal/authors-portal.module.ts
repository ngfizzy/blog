import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import { SharedModule } from '../shared/shared.module';
import * as fromAuthorsCore from './core/core.module';
import { authorsPortalReducer } from './state/authors-portal.reducer';
import { AuthorsPortalEffects } from './state/authors-portal.effect';

@NgModule({
  imports: [
    CommonModule,
    fromAuthorsCore.CoreModule,
    SharedModule,
    RouterModule,
    AuthorsPortalRoutingModule,
    StoreModule.forFeature('authorsPortal', authorsPortalReducer),
    EffectsModule.forFeature([AuthorsPortalEffects]),
  ],
  declarations: [   ...AuthorsPortalRoutingModule.moduleComponents ],
})
export class AuthorsPortal {}
