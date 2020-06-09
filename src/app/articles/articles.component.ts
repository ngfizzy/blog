import { Component, OnInit } from '@angular/core';
import { Nav, SideNavMode } from '../shared/models';
import { ArticlesState } from './state/articles.state';
import { Store, select } from '@ngrx/store';
import { getPageTitle } from '../core/state';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  sideNavMode: SideNavMode = SideNavMode.Side;

  nav: Nav = {
    iconUrl: 'assets/avatar.png',
    items: [
      { name: 'All', path: null },
      { name: 'Tech', path: null },
      { name: 'Poetry', path: ['', 'poetry'] },
      { name: 'Self Help', path: null },
      { name: 'About', path: null },
    ],
  };
  pageTitle$: any;

  constructor(private store: Store<ArticlesState>) {}

  ngOnInit() {
    this.pageTitle$ = this.store.pipe(select(getPageTitle));
  }
}
