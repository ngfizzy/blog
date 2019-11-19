import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { publicReducer } from './state/public.reducer';
import { PublicEffects } from './state/public.effects';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('public', publicReducer),
    EffectsModule.forFeature([PublicEffects]),
    PublicRoutingModule,
  ],
  declarations: [
    ...PublicRoutingModule.routeComponents
  ]
})
export class PublicModule {}
