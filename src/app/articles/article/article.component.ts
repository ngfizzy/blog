import { getSelectedArticleActivities } from './../state/index';
import { Applaud } from './../state/articles.actions';
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
import { ToastrService } from 'ngx-toastr';
import { Title, Meta } from '@angular/platform-browser';

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
  currentUserApplauds = 0;

  private applaudsWatcherSubject$: Subject<ApplaudPayload> = new Subject();
  private applaudsWatcher$ = this.applaudsWatcherSubject$
    .asObservable()
    .pipe(debounceTime(800), distinctUntilChanged());
  selectedArticle: Article;

  constructor(
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private store: Store<fromArticle.ArticleState>,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit() {
    this.setArticle();

    this.applaudsWatcher$
      .pipe(takeUntil(this.destroy$))
      .subscribe(applauds => this.store.dispatch(new Applaud(applauds)));

    this.store.dispatch(new GetCurrentAudience());
    this.audience$ = this.store.select(getAudience);

    this.audienceActivities$ = this.store.select(
      fromArticle.getSelectedArticleActivities
    );

    this.applaudsWatcher$
      .pipe(takeUntil(this.destroy$))
      .subscribe(applauds =>
        this.store.dispatch(new fromArticleActions.Applaud(applauds)),
      );
  }

  setArticle() {
    this.article$ = this.router.params.pipe(
      takeUntil(this.destroy$),
      tap(params =>
        this.store.dispatch(
          new fromArticleActions.GetOneArticle(+params.articleId),
        ),
      ),
      switchMap(() => this.store.pipe(select(fromArticle.selectArticle))),
    );
  }


  showNotification(message: string) {
    this.toastr.info(message);
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
  private updateTitleAndMeta(article: Article) {
    if (article) {
      this.title.setTitle(`NgFizzy Blog - Tech: ${article.title}`);
      this.meta.updateTag({
        name: `NgFizzy Blog - Full Article`,
        content: article.title,
      });
    }
  }
}
