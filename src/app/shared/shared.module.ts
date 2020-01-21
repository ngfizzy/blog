import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatListModule, MatList } from '@angular/material/list';
import { EllipsisModule } from 'ngx-ellipsis';

import {
  MatSidenavModule,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent } from '@angular/material/sidenav';
import { MarkdownModule } from 'ngx-markdown';
import { ClipboardModule } from 'ngx-clipboard';

import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
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
    PostComponent,
    SpinnerComponent,
    RouterModule
  ],
  declarations: [ SpinnerComponent, PostComponent ],
  providers: [ ]
})
export class SharedModule {}
