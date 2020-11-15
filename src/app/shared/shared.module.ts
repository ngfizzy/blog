import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatError,
} from '@angular/material/form-field';
import {
  MatSidenavModule,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import {
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { EllipsisModule } from 'ngx-ellipsis';
import { MarkdownModule } from 'ngx-markdown';
import { ClipboardModule } from 'ngx-clipboard';
import { OrderModule } from 'ngx-order-pipe';
import { TimeagoModule } from 'ngx-timeago';

import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/Not Found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { SecondsToJustNowPipe } from './pipes/seconds-to-just-now.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LoadingAndEmptyStateComponent } from './components/loading-and-empty-state/loading-and-empty-state.component';
import { ApplaudsButtonComponent } from './components/applauds-button/applauds-button.component';
import {  CommentSectionTogglerComponent } from './components/comment-section-toggler/comment-section-toggler.component';
import { ContactAreaComponent } from './components/contact-area/contact-area.component';
import { ListComponent } from './components/list/list.component';
import { ListPanelComponent } from './components/list-panel/list-panel.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FeaturedArticlesComponent } from './components/featured-articles/featured-articles.component';
import { RightSlideoutPanelComponent } from './components/right-slideout-panel/right-slideout-panel.component';
import { EntityToolbarComponent } from './components/entity-toolbar/entity-toolbar.component';
import { ArticlesContentWrapperComponent } from './components/articles-content-wrapper/articles-content-wrapper.component';
import { CommentComponent } from './components/comment/comment.component';
import { AudienceSectionComponent } from './components/audience-section/audience-section.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideNavCollapsedComponent } from './components/side-nav-collapsed/side-nav-collapsed.componet';
import { FeaturedArticlesListItemComponent } from './components/featured-articles-list-item/featured-articles-list-item.component';
import { FeaturedArticlesListComponent } from './components/featured-articles-list/featured-articles-list.component';


@NgModule({
  imports: [
    FormsModule,
    OrderModule,
    TimeagoModule,
    CommonModule,
    ClipboardModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MarkdownModule.forChild(),
  ],
  exports: [
    ClipboardModule,
    CommonModule,
    EllipsisModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormField,
    MatListModule,
    MatLabel,
    MatInput,
    MatIcon,
    MatSidenav,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatSidenavContainer,
    MatProgressSpinnerModule,
    MatSidenavContent,
    MatButton,
    MatToolbar,
    NavComponent,
    NotFoundComponent,
    ArticleComponent,
    SpinnerComponent,
    CopyToClipboardComponent,
    RouterModule,
    MatDialogModule,
    OrderModule,
    TimeagoModule,
    MatError,
    ArticlesContentWrapperComponent,
    SecondsToJustNowPipe,
    ContactFormComponent,
    MatNavList,
    MatListItem,
    LoadingAndEmptyStateComponent,
    ApplaudsButtonComponent,
    CommentSectionTogglerComponent,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    ContactAreaComponent,
    ListPanelComponent,
    ListComponent,
    ListItemComponent,
    RightSlideoutPanelComponent,
    CommentComponent,
    AudienceSectionComponent,
    MarkdownModule,
  ],
  declarations: [
    SpinnerComponent,
    ArticleComponent,
    NotFoundComponent,
    ApplaudsButtonComponent,
    NavComponent,
    CopyToClipboardComponent,
    ArticlesContentWrapperComponent,
    SecondsToJustNowPipe,
    ContactFormComponent,
    LoadingAndEmptyStateComponent,
    CommentSectionTogglerComponent,
    ContactAreaComponent,
    ListPanelComponent,
    ListComponent,
    ListItemComponent,
    FeaturedArticlesComponent,
    RightSlideoutPanelComponent,
    EntityToolbarComponent,
    CommentComponent,
    AudienceSectionComponent,
    SideNavComponent,
    SideNavCollapsedComponent,
    FeaturedArticlesListComponent,
    FeaturedArticlesListItemComponent
  ],
  providers: [],
})
export class SharedModule {}
