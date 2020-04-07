import { NgModule } from '@angular/core';

import { PoetryRoutingModule } from './poetry-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PoemComponent } from './components/poem/poem.component';
import { PoemDialogComponent } from './components/poem-dialog/poem-dialog.component';
import { SlideControlComponent } from './components/slide-control/slide-control.component';
import { PoetryService } from './poetry.service';
import { StoreModule } from '@ngrx/store';
import { poetryReducers } from './state/poetry.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PoetryEffects } from './state/poetry.effects';
import { PoetryChildrenWrapperComponent } from './components/poetry-children-container/poetry-children-wrapper.component';

@NgModule({
  imports: [
    SharedModule,
    PoetryRoutingModule,
    StoreModule.forFeature('poetry', poetryReducers),
    EffectsModule.forFeature([ PoetryEffects ]),
  ],
  exports: [],
  declarations: [
    ...PoetryRoutingModule.routeComponents,
    PoemComponent,
    PoemDialogComponent,
    SlideControlComponent,
    PoetryChildrenWrapperComponent,
  ],
  providers: [
    PoetryService,
  ],
  entryComponents: [ PoemDialogComponent ],
})
export class PoetryModule {}
