import { AuthorsPortalSharedModule } from './authors-portal-shared/authors-portal-shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { authorsPortalReducer } from './state/authors-portal.reducer';
import { AuthorsArticlesService } from './services/authors-articles.service';
import { AuthorsPortalEffects } from './state/authors-portal.effects';
import { DashboardService } from './services/dashboard.service';
import { CategorySummaryWidgetComponent } from './dashboard/components/category-summary-widget/category-summary-widget.component';

@NgModule({
  imports: [
    AuthorsPortalSharedModule,
    RouterModule,
    AuthorsPortalRoutingModule,
    StoreModule.forFeature('authorsPortal', authorsPortalReducer),
    EffectsModule.forFeature([AuthorsPortalEffects]),
  ],
  providers: [AuthGuard, AuthService, DashboardService, AuthorsArticlesService],
  declarations: [
    ...AuthorsPortalRoutingModule.moduleComponents,
    CategorySummaryWidgetComponent,
  ],
})
export class AuthorsPortal {}
