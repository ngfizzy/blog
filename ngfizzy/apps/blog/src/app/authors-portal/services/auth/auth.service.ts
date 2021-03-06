import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGqlService } from './auth-gql.service';
import { tap } from 'rxjs/operators';
import { authTokenKey } from '../../../core/constants';
import { AuthorsPortalState, isLoggedIn } from '../../state';
import { Store, select } from '@ngrx/store';
import { AuthorizeUser } from '../../state/authors-portal.actions';


@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private authGqlService: AuthGqlService,
    private store: Store<AuthorsPortalState>
  ) {
    this.store.dispatch(new AuthorizeUser({authToken: localStorage.getItem(authTokenKey)}));
  }

  isLoggedIn() {
    return this.store.pipe(select(isLoggedIn));
  }

  login(username: string, password: string) {
    return this.authGqlService.login(username, password)
      .pipe(tap(res => localStorage.setItem(authTokenKey, res.token)));
  }

  logout(authToken?: string) {
    return this.authGqlService.logout(authToken).pipe(
      tap((res) => {
        if (res.success) {
          localStorage.removeItem(authTokenKey);
          this.router.navigate(['/authors', 'login']);
        }

        return res;
      })
    );
  }
}
