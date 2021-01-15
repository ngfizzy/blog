import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedStoreEffects } from './share-store.effects';

import { reducer } from './shared-store.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('sharedStore', reducer),
    EffectsModule.forFeature([SharedStoreEffects]),
  ]
})
export class SharedStoreModule {}
