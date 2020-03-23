import { NgModule } from '@angular/core';

import { PoetryRoutingModule } from './poetry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PoemComponent } from './components/poem/poem.component';

@NgModule({
  imports: [
    SharedModule,
    PoetryRoutingModule,
  ],
  exports: [],
  declarations: [
    ...PoetryRoutingModule.routeComponents,
    PoemComponent,
  ],
  providers: [],
})
export class PoetryModule {}
