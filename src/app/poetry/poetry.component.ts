import { GetCurrentAudience } from 'src/app/core/state/core.actions';
import { CoreState } from 'src/app/core/state';
import { Component, OnInit } from '@angular/core';
import { Nav, SideNavContentSizing } from '../shared/models';
import { Store } from '@ngrx/store';

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

  constructor(private store: Store<CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new GetCurrentAudience());
  }

  toggleSideNav(isOpen: boolean) {
    this.isSideNavOpen = isOpen;
  }
}
