import { CreateCategoryComponent } from './dashboard/components/create-category-form/create-category.component';
import { AuthorsPortalSharedModule } from './authors-portal-shared/authors-portal-shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthorsPortalRoutingModule } from './authors-portal-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth/auth.service';
import { authorsPortalReducer } from './state/authors-portal.reducer';
import { AuthorsArticlesService } from './services/authors-articles/authors-articles.service';
import { AuthorsPortalEffects } from './state/authors-portal.effects';
import { DashboardService } from './services/dashboard/dashboard.service';
import { CategorySummaryWidgetComponent } from './dashboard/components/category-summary-widget/category-summary-widget.component';
import { AuthorsArticlesGQLService } from './services/authors-articles/authors-articles-gql.service';
import { MessagePanelComponent } from './dashboard/components/message-panel/message-panel.component';
import { DashboardGqlService } from './services/dashboard/dashboard-gql.service';
import { MessagesService } from './services/messages/messages.service';
import { MessagesGqlService } from './services/messages/messages-gql.service';
import { AuthGqlService } from './services/auth/auth-gql.service';

@NgModule({
  imports: [
    AuthorsPortalSharedModule,
    RouterModule,
    AuthorsPortalRoutingModule,
    StoreModule.forFeature('authorsPortal',  authorsPortalReducer),
    EffectsModule.forFeature([AuthorsPortalEffects]),
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthGqlService,
    DashboardService,
    DashboardGqlService,
    AuthorsArticlesService,
    AuthorsArticlesGQLService,
    MessagesService,
    MessagesGqlService,
  ],
  declarations: [
    ...AuthorsPortalRoutingModule.moduleComponents,
    CategorySummaryWidgetComponent,
    CreateCategoryComponent,
    MessagePanelComponent
  ],
})
export class AuthorsPortal {}
