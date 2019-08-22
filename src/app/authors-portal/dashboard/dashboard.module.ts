import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from 'src/app/shared/shared.module';
// import { AuthorsToolbarComponent } from './authors-toolbar/authors-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // AuthorsToolbarComponent,
    ...DashboardRoutingModule.moduleComponents,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DashboardRoutingModule,
  ],
  exports: [],
  providers: [
  ],
})
export class DashboardModule {}
