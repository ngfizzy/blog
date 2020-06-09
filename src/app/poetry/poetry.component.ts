import { GetCurrentAudience, SetPageTitle } from 'src/app/core/state/core.actions';
import { CoreState, getPageTitle } from 'src/app/core/state';
import { Component, OnInit } from '@angular/core';
import { Nav, SideNavContentSizing } from '../shared/models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './poetry.component.html',
})
export class PoetryComponent implements OnInit {
  isSideNavOpen = false;
  sideNavContentSizing = SideNavContentSizing.Fill;
  nav: Nav = {
    iconUrl: 'assets/poetry.jpeg',
    items: [{ name: 'Shakespeare', path: null }],
  };
  pageTitle$: Observable<string>;

  constructor(private store: Store<CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new GetCurrentAudience());
    this.store.dispatch(new SetPageTitle('Poetry'));
    this.pageTitle$ = this.store.pipe(select(getPageTitle));

  }

  toggleSideNav(isOpen: boolean) {
    this.isSideNavOpen = isOpen;
  }
}
