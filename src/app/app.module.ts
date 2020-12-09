import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache, ApolloLink} from '@apollo/client/core';
import {Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import { TimeagoModule } from 'ngx-timeago';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {authTokenKey} from './core/constants';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CoreEffects } from './core/state/core.effects';
import { SharedStoreModule } from './shared-store/shared-store.module';
import { environment } from 'src/environments/environment';


const authContext = setContext(() => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
  }
}));


const authError = onError(({graphQLErrors}) => {
  const unauthorizedError =  graphQLErrors.find(error => error.message === 'unauthorized');

  if (unauthorizedError) {
    localStorage.removeItem(authTokenKey);
    location.reload();
  }
});

@NgModule({
  declarations: [
    ...AppRoutingModule.routeComponents,
    AppComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,
    CoreModule,
    TimeagoModule.forRoot(),
    SharedStoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    EffectsModule.forRoot([AppEffects, CoreEffects]),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [{
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: ApolloLink.from([
            authContext,
            authError,
            httpLink.create({
              uri: environment.apiBaseUrl,
            })
          ]),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');

  }
}

