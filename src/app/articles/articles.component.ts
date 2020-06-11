import { GetAllArticles } from './state/articles.actions';
import { getAllArticles } from './state/index';
import { GetNav, SetPageTitle } from './../core/state/core.actions';
import { getNav } from './../core/state/index';
import { delay, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Nav, SideNavMode, Article } from '../shared/models';
import { ArticlesState } from './state/articles.state';
import { Store, select } from '@ngrx/store';
import { getPageTitle } from '../core/state';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  sideNavMode: SideNavMode = SideNavMode.Side;

  pageTitle$: Observable<string>;
  nav$: Observable<Nav>;
  articles$: Observable<Article[]> = of([]);

  searchResults = [];

  constructor(private store: Store<ArticlesState>) {}

  ngOnInit() {
    this.store.dispatch(new SetPageTitle('Articles and Tutorials'));
    this.pageTitle$ = this.store.pipe(select(getPageTitle));

    this.store.dispatch(new GetNav());
    this.nav$ = this.store.pipe(select(getNav));

    this.store.dispatch(new GetAllArticles());
    this.articles$ = this.store.pipe(select(getAllArticles));
  }

  search(searchTerm: string, articles: Article[]) {}
}
