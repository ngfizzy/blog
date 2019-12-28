import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) {

  }

  canLoad(
    route: Route,
    segements: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean  {
      if (this.auth.authState) {
        return of(true);
      }

      this.router.navigate(['authors', 'login']);
      return of(false);
  }

  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.auth.authState) {
      this.router.navigate(['authors', 'login']);
      return of(false);
    }

    return of(true);
  }
}
