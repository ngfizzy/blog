import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth: AuthService, private router: Router) {

  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean  {
     return this.auth.isLoggedIn().pipe(tap(isLoggedIn => {
       if (!isLoggedIn) {
        this.router.navigate(['/authors', 'login']);
       }
     }));
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isLoggedIn().pipe(tap(isLoggedIn => {
      if (!isLoggedIn) {
       this.router.navigate(['/authors', 'login']);
      }
    }));
  }
}
