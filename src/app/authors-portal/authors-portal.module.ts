import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import * as fromAuthorsCore from './core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    fromAuthorsCore.CoreModule,
    SharedModule,
    RouterModule,
    AuthorsPortalRoutingModule,
  ],
  declarations: [   ...AuthorsPortalRoutingModule.moduleComponents ],
})
export class AuthorsPortal {}
