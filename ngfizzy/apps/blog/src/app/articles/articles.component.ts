import { Component, OnInit, OnChanges } from '@angular/core';
import { Nav, SideNavMode, Article } from '@ngfizzy/entities';
import { Store, select } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import stringSimilarity from 'string-similarity';

import { getPageTitle } from '../core/state';
import { ArticlesState } from './state/articles.state';
import { getNav } from './../core/state';
import { GetAllArticles } from './state/articles.actions';
import { GetNav, SetPageTitle } from './../core/state/core.actions';
import { getAllArticles } from './state';

@Component({
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnChanges {
  sideNavMode: SideNavMode = SideNavMode.Side;

  pageTitle$: Observable<string>;
  nav$: Observable<Nav>;
  articles$: Observable<Article[]> = of([]);

  isSmallDevice = window.innerWidth <= 770;
  searchResults = [];
  screenWidth: number;
  isSideNavOpen = true;

  constructor(private store: Store<ArticlesState>) {}

  ngOnInit() {
    this.setSidenavMode();

    this.store.dispatch(new SetPageTitle('Articles and Tutorials'));
    this.pageTitle$ = this.store.pipe(select(getPageTitle), delay(0));

    this.store.dispatch(new GetNav());
    this.nav$ = this.store.pipe(select(getNav));

    this.store.dispatch(new GetAllArticles());
    this.articles$ = this.store.pipe(select(getAllArticles));
  }

  ngOnChanges() {}

  setSidenavMode() {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 768) {
      this.sideNavMode = SideNavMode.Over;
      this.isSideNavOpen = false;
    }
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
