import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { authorsPortalReducer } from './state/authors-portal.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
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
