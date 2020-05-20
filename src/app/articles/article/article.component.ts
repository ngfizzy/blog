import { getSelectedArticleActivities } from './../state/index';
import { ArticlesActions, Applaud } from './../state/articles.actions';
import { getAudience } from './../../core/state/index';
import {
  ApplaudPayload,
  CommentPayload,
} from './../../shared/models/audience-activity-payloads.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  takeUntil,
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromArticle from '../state';
import * as fromArticleActions from '../state/articles.actions';

import { ArticleComponentConfig } from '../../shared/models/article-component-config.interface';
import { Article } from '../../shared/models/article.interface';
import { Audience, AudienceActivity } from 'src/app/shared/models';
import { GetCurrentAudience } from 'src/app/core/state/core.actions';

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
  currentAudienceApplauds = 0;
  audience$: Observable<Audience>;
  audienceActivities$: Observable<AudienceActivity[]>;
  hideScrollBar: boolean;

  private applaudsWatcherSubject$: Subject<ApplaudPayload> = new Subject();
  private applaudsWatcher$ = this.applaudsWatcherSubject$
    .asObservable()
    .pipe(debounceTime(800), distinctUntilChanged());

  constructor(
    private router: ActivatedRoute,
    private store: Store<fromArticle.ArticleState>
  ) {}

  ngOnInit() {
    this.setArticle();

    this.applaudsWatcher$
      .pipe(takeUntil(this.destroy$))
      .subscribe((applauds) => this.store.dispatch(new Applaud(applauds)));

    this.store.dispatch(new GetCurrentAudience());
    this.audience$ = this.store.select(getAudience);
    this.audienceActivities$ = this.store.select(
      fromArticle.getSelectedArticleActivities
    );
    this.audienceActivities$ = this.store.pipe(
      select(getSelectedArticleActivities)
    );

    this.applaudsWatcher$
      .pipe(takeUntil(this.destroy$))
      .subscribe((applauds) =>
        this.store.dispatch(new fromArticleActions.Applaud(applauds))
      );
  }

  setArticle() {
    this.article$ = this.router.params.pipe(
      takeUntil(this.destroy$),
      tap((params) =>
        this.store.dispatch(
          new fromArticleActions.GetOneArticle(+params.articleId)
        )
      ),
      switchMap(() => this.store.pipe(select(fromArticle.selectArticle)))
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitComment(comment: CommentPayload) {
    this.store.dispatch(new fromArticleActions.AddComment(comment));
  }

  submitApplauds(applauds: ApplaudPayload) {
    this.applaudsWatcherSubject$.next(applauds);
  }

  updateAudienceApplauds(applauds: number) {
    this.currentAudienceApplauds = applauds;
  }

  toggleScrollBar(hide: boolean) {
    document.body.style.overflowY = hide ? 'hidden' : 'auto';

    this.hideScrollBar = hide;
  }
}
