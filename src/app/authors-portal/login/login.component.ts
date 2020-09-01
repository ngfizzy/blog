import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsPortalState, isLoggedIn, authorsPortalError } from '../state';
import { Store, select } from '@ngrx/store';
import { Login, AuthorizeUser } from '../state/authors-portal.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { authTokenKey } from 'src/app/core/constants';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AuthorsPortalState> , private router: Router) { }

  username: string;
  password: string;

  isActive: boolean;

  authError$: Observable<string>
  destroy$ = new Subject();

  ngOnInit(): void {

    this.store.pipe(
      select(isLoggedIn),
      takeUntil(this.destroy$)
    ).subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigate(['/authors']);
      } else {
        const authToken = localStorage.getItem(authTokenKey);

        if(authToken) {
          return this.store.dispatch(new AuthorizeUser({ authToken }))
        }
      }
    });
  }

  login() {
    this.store.dispatch(new Login({
      username: this.username,
      password: this.password
    }));


    this.store.pipe(
      select(isLoggedIn),
      takeUntil(this.destroy$)
    ).subscribe(loggedIn => {
      if (loggedIn) {
        this.router.navigate(['/authors']);
      }
    });

    this.authError$ = this.store.pipe(
      select(authorsPortalError),
      takeUntil(this.destroy$)
    );

  }

  toggleActiveState() {
    this.isActive = !this.isActive;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
