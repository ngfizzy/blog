import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Poem, Poems, Slides } from 'src/app/shared/models';
import { Store, select } from '@ngrx/store';
import { PoetryState, getAllPoems, getPoem } from '../../state';
import { Observable, timer, Subject } from 'rxjs';
import { GetAllPoems } from '../../state/poetry.ctions';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil, repeatWhen, tap } from 'rxjs/operators';


@Component({
  selector: 'app-poems-slideshow',
  templateUrl: './poems-slideshow.component.html',
  styleUrls: [ './poems-slideshow.component.scss' ],
})
export class PoemsSlideshowComponent implements OnInit, OnDestroy, Slides {
  poems$: Observable<Poem[]>;
  selectedPoem$: Observable<Poem>;
  private slideShowTimer$ = timer(200, 3000);
  private slideTimerRefresher$ = new Subject();
  private pauseSlideShow$ = new Subject();
  private destroy$ = new Subject();


  poemIndex: number;


  constructor(
    private store: Store<PoetryState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.poems$ = this.store.pipe(select(getAllPoems));
    this.selectedPoem$ = this.store.pipe(select(getPoem));
  }

  goToPreviousSlide(poemId: number, poems: Poems) {
    this.initializeCurrentPoemIndex(poemId, poems);

    const lastIndex = poems.length - 1;
    this.poemIndex--;
    const prevPoemIndex = this.poemIndex >= 0 ? this.poemIndex : lastIndex;
    this.poemIndex = prevPoemIndex >= lastIndex ? lastIndex : this.poemIndex;
    const prevPoemId = poems[prevPoemIndex].id;

    this.router.navigate([ prevPoemId ], { relativeTo: this.route.parent });
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

    this.router.navigate([ nextPoemId ], { relativeTo: this.route.parent });
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
      ).subscribe(() => this.goToNextSlide(poemId, poems));
  }

  pauseSlideshow() {
    this.pauseSlideShow$.next();
    this.slideTimerRefresher$.next();
  }

  private initializeCurrentPoemIndex(poemId: number, poems: Poem[]) {
    if (!this.poemIndex) {
      this.poemIndex = poems.findIndex(poem => (poem.id === poemId)) || 0;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.slideTimerRefresher$.complete();
    this.pauseSlideShow$.complete();
  }
}
