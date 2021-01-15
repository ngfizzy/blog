import { getSelectedPoemActivities } from './../../state/poetry.state';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, timer, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {
  takeUntil,
  repeatWhen,
  tap,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs/operators';
import {
  Poem,
  Poems,
  Slides,
  Audience,
  AudienceActivity,
  ApplaudPayload,
  CommentPayload,
} from '../../../shared/models';
import { PoetryState, getAllPoems, getPoem } from '../../state';
import * as fromPoetryActions from '../../state/poetry.actions';
import { getAudience } from '../../../core/state';
@Component({
  selector: 'app-poems-slideshow',
  templateUrl: './poems-slideshow.component.html',
  styleUrls: ['./poems-slideshow.component.scss'],
})
export class PoemsSlideshowComponent implements OnDestroy, Slides {
  poems$: Observable<Poem[]>;
  selectedPoem$: Observable<Poem>;
  audience$: Observable<Audience>;

  private slideShowTimer$ = timer(200, 3000);
  private slideTimerRefresher$ = new Subject();
  private applaudsWatcherSubject$: Subject<ApplaudPayload> = new Subject();
  private applaudsWatcher$ = this.applaudsWatcherSubject$
    .asObservable()
    .pipe(debounceTime(800), distinctUntilChanged());

  private pauseSlideShow$ = new Subject();
  private destroy$ = new Subject();

  poemIndex: number;
  currentUserApplauds: number;
  hideScrollBar: boolean;
  audienceActivities$: Observable<AudienceActivity[]>;
  hidden: boolean;
  totalApplauds$: Observable<number>;
  commentSectionOpened = false;

  constructor(
    private store: Store<PoetryState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.poems$ = this.store.pipe(select(getAllPoems));
    this.selectedPoem$ = this.store.pipe(select(getPoem));
    this.audience$ = this.store.pipe(select(getAudience));
    this.audienceActivities$ = this.store.pipe(
      select(getSelectedPoemActivities)
    );

    this.totalApplauds$ = this.selectedPoem$.pipe(
      map(
        poem => poem?.audienceActivities?.reduce(
          (accumulator, activity) => accumulator + activity.applauds,
        0,
       )
      )
    );

    this.applaudsWatcher$
      .pipe(takeUntil(this.destroy$))
      .subscribe((applauds) =>
        this.store.dispatch(new fromPoetryActions.Applaud(applauds))
      );
  }


  goToPreviousSlide(poemId: number, poems: Poems) {
    this.initializeCurrentPoemIndex(poemId, poems);

    const lastIndex = poems.length - 1;
    this.poemIndex--;
    const prevPoemIndex = this.poemIndex >= 0 ? this.poemIndex : lastIndex;
    this.poemIndex = prevPoemIndex >= lastIndex ? lastIndex : this.poemIndex;
    const prevPoemId = poems[prevPoemIndex].id;

    this.router.navigate([prevPoemId], { relativeTo: this.route.parent });

  }

  /**
   * Goes to next slide. If slideshow is completes,
   * the slide is reset to the first slide and then stops.
   */
  goToNextSlide(poemId: number, poems: Poems) {
    this.initializeCurrentPoemIndex(poemId, poems);

    const lstIndex = poems.length - 1;
    this.poemIndex++;
    const nextPoemIndex = this.poemIndex <= lstIndex ? this.poemIndex : 0;
    this.poemIndex = nextPoemIndex === 0 ? nextPoemIndex : this.poemIndex;
    const nextPoemId = poems[nextPoemIndex].id;

    this.router.navigate([nextPoemId], { relativeTo: this.route.parent });
  }

  startSlideshow(poemId: number, poems: Poems) {
    this.initializeCurrentPoemIndex(poemId, poems);

    this.slideShowTimer$
      .pipe(
        tap(() => {
          if (this.poemIndex >= poems.length - 1) {
            this.pauseSlideshow();
          }
        }),
        repeatWhen(() => this.slideTimerRefresher$),
        takeUntil(this.pauseSlideShow$),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.goToNextSlide(poemId, poems));
  }

  pauseSlideshow() {
    this.pauseSlideShow$.next();
    this.slideTimerRefresher$.next();
  }

  submitApplauds(applauds: ApplaudPayload) {
    this.applaudsWatcherSubject$.next(applauds);
  }

  updateAudienceApplauds(applauds: number) {
    this.currentUserApplauds = applauds;
  }

  submitComment(comment: CommentPayload) {
    this.store.dispatch(new fromPoetryActions.AddComment(comment));
  }


  private initializeCurrentPoemIndex(poemId: number, poems: Poem[]) {
    if (!this.poemIndex) {
      this.poemIndex = poems.findIndex((poem) => poem.id === poemId) || 0;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.slideTimerRefresher$.complete();
    this.pauseSlideShow$.complete();
  }
}
