import { GetAllArticles } from './state/articles.actions';
import { getAllArticles } from './state/index';
import { GetNav, SetPageTitle } from './../core/state/core.actions';
import { getNav } from './../core/state/index';
import { Component, OnInit } from '@angular/core';
import { Nav, SideNavMode, Article } from '../shared/models';
import { ArticlesState } from './state/articles.state';
import { Store, select } from '@ngrx/store';
import { getPageTitle } from '../core/state';
import { Observable, of } from 'rxjs';

import stringSimilarity from 'string-similarity';
import { delay } from 'rxjs/operators';
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
    this.pageTitle$ = this.store.pipe(select(getPageTitle), delay(0));

    this.store.dispatch(new GetNav());
    this.nav$ = this.store.pipe(select(getNav));

    this.store.dispatch(new GetAllArticles());
    this.articles$ = this.store.pipe(select(getAllArticles));
  }

  search(searchTerm: string, articles: Article[]) {
    if (typeof searchTerm !== 'string') {
      return null;
    }

    this.searchResults = articles
      .filter(article => {
        const similarities = stringSimilarity.compareTwoStrings(
          article.title.toLowerCase(),
          searchTerm.toLowerCase(),
        );
        if (similarities > 0.3) {
          return true;
        }

        return false;
      })
      .map(article => {
        const a = { ...article };
        a.body = a.body.slice(0, 250) + ' ...';

        return a;
      });
  }
}
