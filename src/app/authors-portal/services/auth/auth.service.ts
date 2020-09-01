import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGqlService } from './auth-gql.service';
import { tap } from 'rxjs/operators';
import { authTokenKey } from 'src/app/core/constants';
import { AuthorsPortalState, isLoggedIn } from '../../state';
import { Store, select } from '@ngrx/store';


@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private authGqlService: AuthGqlService,
    private store: Store<AuthorsPortalState>
  ) {}

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
