import { ArticlesContentWrapperComponent } from './components/articles-content-wrapper/articles-content-wrapper.component';
import { ArticleActionsComponent } from 'src/app/shared/components/article-action/article-actions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { MatInputModule, MatInput } from '@angular/material/input';
import {
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatError,
} from '@angular/material/form-field';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
// import { } from '@angular/material/list/list';
import { EllipsisModule } from 'ngx-ellipsis';

import {
  MatSidenavModule,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent,
} from '@angular/material/sidenav';

import { MatDialogModule } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';

import { ClipboardModule } from 'ngx-clipboard';
import { OrderModule } from 'ngx-order-pipe';
import { TimeagoModule } from 'ngx-timeago';

import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/Not Found/not-found.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';
import { SecondsToJustNowPipe } from './pipes/seconds-to-just-now.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LoadingAndEmptyStateComponent } from './components/loading-and-empty-state/loading-and-empty-state.component';
import { ApplaudsButtonComponent } from './components/applauds-button/applauds-button.component';
import {  CommentSectionTogglerComponent } from './components/comment-section-toggler/comment-section-toggler.component';

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
    SideNavComponent,
    NotFoundComponent,
    ArticleComponent,
    SpinnerComponent,
    CopyToClipboardComponent,
    RouterModule,
    MatDialogModule,
    OrderModule,
    TimeagoModule,
    MatError,
    ArticleActionsComponent,
    ArticlesContentWrapperComponent,
    SecondsToJustNowPipe,
    ContactFormComponent,
    MatNavList,
    MatListItem,
    LoadingAndEmptyStateComponent,
    ApplaudsButtonComponent,
    CommentSectionTogglerComponent
  ],
  declarations: [
    SpinnerComponent,
    ArticleComponent,
    NotFoundComponent,
    ApplaudsButtonComponent,
    SideNavComponent,
    CopyToClipboardComponent,
    ArticleActionsComponent,
    ArticlesContentWrapperComponent,
    SecondsToJustNowPipe,
    ContactFormComponent,
    LoadingAndEmptyStateComponent,
    CommentSectionTogglerComponent,
  ],
  providers: [],
})
export class SharedModule {}
