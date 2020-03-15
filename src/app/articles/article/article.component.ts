import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, tap, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromArticle from '../state';
import * as fromArticleActions from '../state/articles.actions';

import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';
import { Article } from '../../shared/models/article.interface';

@Component({
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  articleConfig: ArticleComponentConfig = {
    isActive: true,
    isTouched: true,
    isExpandedView: true,
    isFull: true,
  };
  destroy$: Subject<null> = new Subject();
  article$: Observable<Article>;

  constructor(
    private router: ActivatedRoute,
    private store: Store<fromArticle.ArticleState>) {}

  ngOnInit() {
    this.article$ = this.router.params.pipe(
      takeUntil(this.destroy$),
      tap(params => this.store.dispatch(
        new fromArticleActions.GetOneArticle(+params.articleId))
      ),
      switchMap(() => this.store.pipe(
        select(fromArticle.selectArticle),
      ))
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
