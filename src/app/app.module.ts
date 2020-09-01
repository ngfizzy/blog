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
import { HttpLinkModule, HttpLink,  } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

import {authTokenKey} from './core/constants'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CoreEffects } from './core/state/core.effects';


const authContext = setContext(() => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(authTokenKey)}`
  }
}));


const authError = onError(({graphQLErrors}) => {
  const unauthorizedError =  graphQLErrors.find(error => error.message === 'unauthorized');

  if(unauthorizedError) {
    localStorage.removeItem(authTokenKey);
    location.reload()
  }
})

@NgModule({
  declarations: [...AppRoutingModule.routeComponents, AppComponent],
  imports: [
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    TimeagoModule.forRoot(),
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
    apollo.create({
      link: ApolloLink.from([
        authContext,
        authError,
        httpLink.create({
          uri: 'http://localhost:4000/graphql',
        }),
      ]),
      cache: new InMemoryCache(),
    });
  }
}

