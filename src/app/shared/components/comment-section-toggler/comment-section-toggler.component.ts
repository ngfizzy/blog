import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comment-toggler',
  template: `
   <span class="mat-elevation-z8 icon" (click)="$event.stopPropagation(); toggleCommentSection()">
    <i class="fa fa-comment"></i>
    <span class="comments-count">{{commentsCount}}</span>
  </span>
  `,
  styleUrls: [
    '../audience-activities.component.scss',
    './comment-section-toggler.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentSectionTogglerComponent implements OnInit {
  @Input() isCommentSectionOpened: boolean;
  @Input() commentsCount: number;

  @Output() togglerClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggleCommentSection() {
      this.togglerClicked.emit(!this.isCommentSectionOpened);
  }
}
