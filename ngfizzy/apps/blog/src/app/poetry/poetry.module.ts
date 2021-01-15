import { NgModule } from '@angular/core';

import { PoetryRoutingModule } from './poetry-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PoemComponent } from './components/poem/poem.component';
import { PoemFullCardComponent } from './components/poem-full-card/poem-full-card.component';
import { SlideControlComponent } from './components/slide-control/slide-control.component';
import { PoetryService } from './services/poetry.service';
import { StoreModule } from '@ngrx/store';
import { poetryReducers } from './state/poetry.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PoetryEffects } from './state/poetry.effects';
import { PoetryChildrenWrapperComponent } from './components/poetry-children-container/poetry-children-wrapper.component';
import { PoemsCarouselComponent } from './components/poems-carousel/poems-carousel.component';
import { PoemsSlideshowComponent } from './components/poems-slideshow/poems-slideshow.component';
import { PoetryGqlService } from './services/poetry-gql.service';

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
    PoemFullCardComponent,
    PoemsCarouselComponent,
    PoemsSlideshowComponent,
    SlideControlComponent,
    PoetryChildrenWrapperComponent,
  ],
  providers: [
    PoetryGqlService,
    PoetryService,
  ],
})
export class PoetryModule {}
