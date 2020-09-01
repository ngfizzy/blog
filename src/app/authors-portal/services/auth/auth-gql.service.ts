
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, tap, catchError } from 'rxjs/operators';

import { LoginGqlResponse } from '../../authors-portal-shared/models'
import { login } from './mutations';

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
}
