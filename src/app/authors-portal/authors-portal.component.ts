import { getPageTitle } from './../core/state/index';
import { SideNavContentSizing, Nav } from './../shared/models/nav';
import { Component, OnInit } from '@angular/core';
import { SideNavMode } from '../shared/models';
import { AuthorsPortalState } from './state';
import { State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    ],
  };
  pageTitle$: Observable<string>;

  constructor(private store: State<AuthorsPortalState>) {}

  ngOnInit() {
    this.pageTitle$ = this.store.pipe(select(getPageTitle), delay(0));
  }
}
