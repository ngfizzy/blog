import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { OnePostRoutingModule } from './one-post-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OnePostRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [
    ...OnePostRoutingModule.routeComponents,
  ],
  providers: []
})
export class OnePostModule {}
