import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import {
  MatSidenavModule,
  MatSidenavContainer,
  MatSidenav,
  MatSidenavContent,
  MatDrawerContainer,
  MatDrawer,
  MatDrawerContent } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    SpinnerComponent,
    PostComponent,
    MatCardModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatSidenav,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatSidenavContainer,
    MatSidenavContent,
    MatButton,
    MatToolbar,
    CommonModule,
    FormsModule,
  ],
  declarations: [ SpinnerComponent, PostComponent ],
  providers: []
})
export class SharedModule {}
