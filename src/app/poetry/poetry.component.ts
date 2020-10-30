import { delay } from 'rxjs/operators';
import {
  GetCurrentAudience,
  SetPageTitle,
} from 'src/app/core/state/core.actions';
import { CoreState, getPageTitle } from 'src/app/core/state';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Nav, SideNavContentSizing } from '../shared/models';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './poetry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoetryComponent implements OnInit {
  isSideNavOpen = false;
  sideNavContentSizing = SideNavContentSizing.Fill;
  nav: Nav = {
    iconUrl: 'assets/avatar.png',
    items: [
      { name: 'My Profile', path: ['/profile']},
      { name: 'Grid View', path: ['/poetry/poems/grid'] },
      { name: 'Carousel View',  path: ['/poetry/poems/row']},
      { name: 'Articles', path: ['/articles'] }
    ],
  };
  pageTitle$: Observable<string>;

  constructor(private store: Store<CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new GetCurrentAudience());
    this.store.dispatch(new SetPageTitle('Poetry'));
    this.pageTitle$ = this.store.pipe(select(getPageTitle), delay(0));
  }

  toggleSideNav(isOpen: boolean) {
    this.isSideNavOpen = isOpen;
  }
}
