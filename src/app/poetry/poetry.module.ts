import { NgModule } from '@angular/core';

import { PoetryRoutingModule } from './poetry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PoetryRoutingModule,
  ],
  exports: [],
  declarations: [
    ...PoetryRoutingModule.routeComponents
  ],
  providers: [],
})
export class PoetryModule {}
