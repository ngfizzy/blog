import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, timer } from 'rxjs';


import * as fromPoetry from '../../state/';
import * as poetryActions from '../../state/poetry.actions';
import { tap, takeUntil, repeatWhen, takeWhile } from 'rxjs/operators';
import { Poem, PoemDialogOutput } from 'src/app/shared/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './poem-dialog-view.component.html',
  styleUrls: [ './poem-dialog-view.component.scss' ]
})
export class PoemDialogViewComponent implements OnInit, OnDestroy {
  private slideShowTimer$ = timer(200, 3000);

  private destroy$ = new Subject();
  private pauseSlideShow$ = new Subject();
  private slideTimerRefresher$ = new Subject();
  poemId$: Observable<number>;
  poemIndex: number;
  slideShowTimerRefresher$: any;
  poem$: Observable<Poem>;
  isLoading$: Observable<boolean>;
  poems$: Observable<Poem[]>;
  showDialog: boolean;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromPoetry.PoetryState>  ) { }

  ngOnInit() {
    this.router.onSameUrlNavigation = 'reload';
    document.body.style.overflow = 'hidden';

    this.route.paramMap.pipe(
      tap(paramMap => this.dispatchGetPoemAction(+paramMap.get('id'))),
    ).subscribe();

    this.isLoading$ = this.store.pipe(select(fromPoetry.getPoemLoadingState));
    this.poem$ = this.store.pipe(select(fromPoetry.getPoem));
    this.poems$ = this.store.pipe(select(fromPoetry.getAllPoems));
  }

  private resetDisplay() {
    this.showDialog = false;
    this.showDialog = true;
  }

  backdropClicked() {
    this.router.navigate(['/poetry/poems']);
  }

  private initializeCurrentPoemIndex(poemId: number, poems: Poem[]) {
    if (!this.poemIndex) {
      this.poemIndex = poems.findIndex(poem => (poem.id === poemId)) || 0;
    }
  }

  pauseSlideshow() {
    this.pauseSlideShow$.next();
    this.slideTimerRefresher$.next();
  }

  startSlideshow(dialogOutput: PoemDialogOutput, poems: Poem[]) {
    this.initializeCurrentPoemIndex(dialogOutput.poemId, poems);

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
      ).subscribe(() => this.goToNextSlide(dialogOutput, poems));
  }

  /**
   * Goes to next slide. If slideshow is completes,
   * the slide is reset to the first slide and then stops.
   */
  goToNextSlide(dialogOutput: PoemDialogOutput, poems: Poem[]) {
    this.initializeCurrentPoemIndex(dialogOutput.poemId, poems);

    const lstIndex = poems.length - 1;
    this.poemIndex++;
    const nextPoemIndex = this.poemIndex <= lstIndex ? this.poemIndex : 0;
    this.poemIndex = nextPoemIndex === 0 ? nextPoemIndex : this.poemIndex;
    const nextPoemId = poems[nextPoemIndex].id;

    this.router.navigate(['/poetry/poems/', nextPoemId]);

  }

  goToPreviousSlide(dialogOutput: PoemDialogOutput, poems: Poem[]) {
    this.initializeCurrentPoemIndex(dialogOutput.poemId, poems);

    const lastIndex = poems.length - 1;
    this.poemIndex--;
    const prevPoemIndex = this.poemIndex >= 0 ? this.poemIndex : lastIndex;
    this.poemIndex = prevPoemIndex >= lastIndex ? lastIndex : this.poemIndex;
    const prevPoemId = poems[prevPoemIndex].id;

    this.router.navigate(['/poetry/poems', prevPoemId]);
  }


  private dispatchGetPoemAction(poemId: number) {
    this.store.dispatch( new poetryActions.GetPoem(poemId));
  }

  ngOnDestroy(): void {
    document.body.style.overflowY = 'auto';

    this.destroy$.next();
    this.destroy$.complete();
    this.slideTimerRefresher$.complete();
    this.pauseSlideShow$.complete();
  }
}
