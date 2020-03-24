import { NgModule } from '@angular/core';

import { PoetryRoutingModule } from './poetry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PoemComponent } from './components/poem/poem.component';
import { PoemDialogComponent } from './components/poem-dialog/poem-dialog.component';
import { SlideControlComponent } from './components/slide-control/slide-control.component';

@NgModule({
  imports: [
    SharedModule,
    PoetryRoutingModule,
  ],
  exports: [],
  declarations: [
    ...PoetryRoutingModule.routeComponents,
    PoemComponent,
    PoemDialogComponent,
    SlideControlComponent,
  ],
  providers: [],
  entryComponents: [ PoemDialogComponent ]
})
export class PoetryModule {}
