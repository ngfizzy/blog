import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatIconModule,  MatToolbarModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [ NavComponent ],
  declarations: [
    NavComponent,
  ],
})
export class CoreModule {}
