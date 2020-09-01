import { getPageTitle } from './../core/state/index';
import { SideNavContentSizing, Nav } from './../shared/models/nav';
import { Component, OnInit } from '@angular/core';
import { SideNavMode } from '../shared/models';
import { AuthorsPortalState, isLoggedIn } from './state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Logout } from './state/authors-portal.actions';
import { authTokenKey } from '../core/constants';

@Component({
  selector: 'app-authors-portal',
  templateUrl: 'authors-portal.component.html',
  styleUrls: ['authors-portal.component.scss'],
})
export class AuthorsPortalComponent implements OnInit {
  sideNavMode = SideNavMode.Side;
  navContentSize = SideNavContentSizing.Fill;
  nav: Nav = {
    iconUrl: 'assets/avatar.png',
    items: [
      { name: 'Dashboard', path: ['/authors'] },
      { name: 'Articles', path: ['/authors/articles'] },
      { name: 'Categories', path: ['/authors/categories'] },
    ],
  };
  pageTitle$: Observable<string>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AuthorsPortalState>) {}

  ngOnInit() {
    this.pageTitle$ = this.store.pipe(select(getPageTitle), delay(0));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  }

  logout() {
    this.store.dispatch(new Logout({
      token: localStorage.getItem(authTokenKey)
      })
    );
  }
}
