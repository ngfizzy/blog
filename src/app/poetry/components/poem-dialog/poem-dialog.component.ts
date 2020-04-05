import { Component, OnInit, Inject, Input, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Poem, PoemDialogOutput } from 'src/app/shared/models';
import { ToastrService } from 'ngx-toastr';
import { SlideShowActionsTypes } from 'src/app/core/constants';
import { timer, Subject, interval, Observable } from 'rxjs';
import { takeWhile, repeatWhen, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-poem-dialog',
  templateUrl: './poem-dialog.component.html',
  styleUrls: [ './poem-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoemDialogComponent implements OnChanges {
  @ViewChild('poemContainer', { static: false }) poemContainer: ElementRef;
  @ViewChild('poemTitleWrapper', { static: false }) poemTitleWrapper: ElementRef;
  @ViewChild('poemTitle', { static: false }) poemTitle: ElementRef;
  @Input() poem: Poem;

  @Output() previous = new EventEmitter<PoemDialogOutput>();
  @Output() next = new EventEmitter<PoemDialogOutput>();
  @Output() play = new EventEmitter<PoemDialogOutput>();
  @Output() pause = new EventEmitter<PoemDialogOutput>();


  currentLocation = window.location.href;
  animation$: Observable<{ opacity: number}>;
  repeatAnimation$ = new Subject();

  constructor(private toastr: ToastrService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.poem.isFirstChange()) {
      this.animatePoem();
    }
  }


  private animatePoem() {
    this.animation$ =  timer(0, 1).pipe(
      takeWhile((counter) => (counter <= 400)),
      map(counter => counter / 400),
      tap((opacity) => {
        if (opacity >= 1) {
          this.repeatAnimation$.next();
        }
      }),
      repeatWhen(() => this.repeatAnimation$),
      map(opacity => ({ opacity }))
    );
  }

  linkCopied() {
    this.toastr.info('Sharable Link Copied');
  }

  goToPrevious(poemId: number) {
    this.previous.emit(new PoemDialogOutput(
      SlideShowActionsTypes.Previous,
      poemId
    ));
  }

  goToNext(poemId: number) {
    this.next.emit(new PoemDialogOutput(
      SlideShowActionsTypes.Next,
      poemId
    ));
  }

  trackScroll(event: MouseEvent) {
    let scrollTop = this.poemContainer.nativeElement.scrollTop;

    if (scrollTop > 0) {
      scrollTop = scrollTop > 90 ? 90 : scrollTop;
      const titleTransparency = ((scrollTop / 90) * 100) / 100 ;
      const backgroundColor = `rgba(20, 20, 26, ${titleTransparency})`;
      this.poemTitleWrapper.nativeElement.style.backgroundColor = backgroundColor;
    }
  }

  startSlideShow(poemId: number) {
    this.play.emit(new PoemDialogOutput(
        SlideShowActionsTypes.Play,
        poemId,
      ),
    );
  }

  pauseSlideShow(poemId: number) {
    this.pause.emit(new PoemDialogOutput(
      SlideShowActionsTypes.Pause,
      poemId
    ));
  }
}
