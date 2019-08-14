import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';

@NgModule({
  declarations: [ ...DashboardRoutingModule.moduleComponents],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [],
  providers: [
  ],
})
export class DashboardModule {}
