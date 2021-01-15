import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApplaudPayload, Audience, AudienceActivity } from '../../models';

@Component({
  selector: 'app-applauds-button',
  template: `
  <span class=" mat-elevation-z10 icon" (click)="$event.stopPropagation(); clap()">
    <img src="assets/clap.png" alt="Applaud">
    <span *ngIf="!isClapping" class="applauds-count">{{ totalApplauds }}</span>
    <span *ngIf="isClapping" class="applauds-count">{{ currentAudienceApplauds }}</span>
  </span>
  `,
  styleUrls: ['../audience-activities.component.scss']
})
export class ApplaudsButtonComponent implements OnChanges {
  @Input() totalApplauds: number;
  @Input() currentAudience: Audience;
  @Input() currentAudienceApplauds: number;
  @Input() articleId: number;

  @Output() applaud = new EventEmitter<ApplaudPayload>();
  @Output() updateUserApplaud = new EventEmitter<number>();

  isClapping = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const { totalApplauds } = changes;

    if (
      totalApplauds?.currentValue
    ) {
      this.isClapping = false;
    }
  }

  clap() {
    this.isClapping = true;

    let applauds = this.currentAudienceApplauds || 0 ;

    applauds = applauds < 50 ? applauds + 1 : 0;

    this.updateUserApplaud.emit(applauds);
    this.applaud.emit({
      applauds,
      articleId: this.articleId,
      audience: this.currentAudience,
    });
  }
}
