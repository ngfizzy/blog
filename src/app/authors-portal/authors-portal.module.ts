import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import * as fromAuthorsCore from './core/core.module';

@NgModule({
  imports: [
    CommonModule,
    fromAuthorsCore.CoreModule,
    SharedModule,
    AuthorsPortalRoutingModule,
  ],
  declarations: [   ...AuthorsPortalRoutingModule.moduleComponents ],
})
export class AuthorsPortal {}
