import { GetNav } from './../core/state/core.actions';
import { getNav } from './../core/state/index';
import { delay, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Nav, SideNavMode } from '../shared/models';
import { ArticlesState } from './state/articles.state';
import { Store, select } from '@ngrx/store';
import { getPageTitle } from '../core/state';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  sideNavMode: SideNavMode = SideNavMode.Side;

  pageTitle$: Observable<string>;
  nav$: Observable<Nav>;

  constructor(private store: Store<ArticlesState>) {}

  ngOnInit() {
    this.pageTitle$ = this.store.pipe(select(getPageTitle), delay(0));
    this.store.dispatch(new GetNav());
    this.nav$ = this.store.pipe(select(getNav));
  }
}
