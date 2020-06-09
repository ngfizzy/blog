import { SetPageTitle } from './../../../../core/state/core.actions';
import { Component, OnInit, NgZone } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Article } from 'src/app/shared/models/article.interface';
import { ArticleComponentConfig } from 'src/app/shared/models/article-component-config.interface';
import * as fromAuthorsArticles from '../../state';
import * as fromAuthorsArticlesActions from '../../state/authors-articles.actions';

@Component({
  selector: 'app-authors-articles',
  templateUrl: './authors-articles.component.html',
  styleUrls: ['./authors-articles.component.scss'],
})
export class AuthorsArticlesComponent implements OnInit {
  selectedArticle$: Observable<Article>;
  articles$: Observable<Article[]>;
  isEditingTitle: boolean;
  articleListItemConfig: ArticleComponentConfig;
  articleStatus$: Observable<'saved' | 'erred' | 'saving'>;
  selectedArticleId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromAuthorsArticles.AuthorsArticlesState>,
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.store.dispatch(new SetPageTitle('Articles'));
    this.store.dispatch(new fromAuthorsArticlesActions.GetArticles());

    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.selectedArticleId = id ? +id : null;
    });

    this.articleListItemConfig = this.getArticlesConfig();

    this.articles$ = this.store.pipe(select(fromAuthorsArticles.getArticles));

    this.selectedArticle$ = this.store.pipe(
      select(fromAuthorsArticles.viewArticle),
    );
    this.articleStatus$ = this.store.pipe(
      select(fromAuthorsArticles.selectArticleStatus),
    );
  }

  createArticle() {
    this.router.navigate(['authors/articles/edit/new']);
  }

  showFullArticle(articleId: number) {
    this.router.navigate(['authors/articles', articleId]);
  }

  search() {}

  getArticlesConfig() {
    return {
      isActive: false,
      isExpandedView: false,
      isTouched: false,
      canToggle: false,
      isMini: true,
      isFull: false,
      shouldHideShadows: true,
    };
  }

  saveTitle(title: string, articleId: number) {
    this.selectedArticleId = articleId;

    if (this.selectedArticleId) {
      this.store.dispatch(
        new fromAuthorsArticlesActions.EditArticleTitle({
          title,
          articleId: this.selectedArticleId,
        }),
      );
    }
  }

  gotoPublishPage(articleId: number) {
    this.router.navigate(['authors/articles', articleId, 'publish']);
  }
}
