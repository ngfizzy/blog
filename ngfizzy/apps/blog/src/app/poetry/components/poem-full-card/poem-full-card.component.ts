import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Poem } from '@ngfizzy/entities';
import { ToastrService } from 'ngx-toastr';
import { timer, Subject, Observable } from 'rxjs';
import { takeWhile, repeatWhen, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-poem-full-card',
  templateUrl: './poem-full-card.component.html',
  styleUrls: ['./poem-full-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoemFullCardComponent implements OnChanges {
  @ViewChild('poemContainer') poemContainer: ElementRef;
  @ViewChild('poemTitleWrapper')
  poemTitleWrapper: ElementRef;
  @ViewChild('poemTitle') poemTitle: ElementRef;

  @Input() poem: Poem;
  @Input() maxHeight: string;

  currentLocation = window.location.href;
  repeatAnimation$ = new Subject();
  opacityAnimation$: Observable<number>;

  constructor(private toastr: ToastrService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      !changes.poem.isFirstChange() &&
      changes.poem.previousValue.id !== changes.poem.currentValue.id
    ) {
      this.animatePoem();
    }
  }

  private animatePoem() {
    this.opacityAnimation$ = timer(0, 1).pipe(
      takeWhile((counter) => counter <= 400),
      map((counter) => counter / 400),
      tap((opacity) => {
        if (opacity >= 1) {
          this.repeatAnimation$.next();
        }
      }),
      repeatWhen(() => this.repeatAnimation$)
    );
  }

  linkCopied() {
    this.toastr.info('Sharable Link Copied');
  }

  trackScroll() {
    let scrollTop = this.poemContainer.nativeElement.scrollTop;

    if (scrollTop > 0) {
      scrollTop = scrollTop > 90 ? 90 : scrollTop;
      const titleTransparency = ((scrollTop / 90) * 100) / 100;
      const backgroundColor = `rgba(20, 20, 26, ${titleTransparency})`;
      this.poemTitleWrapper.nativeElement.style.backgroundColor = backgroundColor;
    }
  }
}
