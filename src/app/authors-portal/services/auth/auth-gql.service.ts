
import {Apollo} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { LoginGqlResponse, LogoutGqlResponse } from '../../authors-portal-shared/models';
import { login, logout } from './mutations';

@Injectable()
export class AuthGqlService {
  constructor(private apollo: Apollo) { }

  login(username: string, password: string) {
    return this.apollo.mutate<LoginGqlResponse>({
      mutation: login,
      variables: {
        username,
        password
      }
    }).pipe(map(res => res.data.login));
  }

  logout(authToken?: string) {
    return this.apollo.mutate<LogoutGqlResponse>({
      mutation: logout,
      variables: {
        authToken
      }
    }).pipe(map(res => res.data.logout));
  }
}
