import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CoreEffects } from './core/state/core.effects';

@NgModule({
  declarations: [
    ...AppRoutingModule.routeComponents,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    EffectsModule.forRoot([ AppEffects, CoreEffects ]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
