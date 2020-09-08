import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-button',
  template: `
   <span class="mat-elevation-z8 icon" (click)="$event.stopPropagation(); toggleCommentSection()">
    <i class="fa fa-comment"></i>
    <span class="comments-count">{{commentsCount}}</span>
  </span>
  `,
  styleUrls: ['../audience-activities.component.scss']
})
export class CommentSectionTogglerComponent implements OnInit {
  @Input() isCommentSectionOpened: boolean;
  @Input() commentsCount: number

  @Output() commentSectionToggled = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() { }

  toggleCommentSection() {
      this.commentSectionToggled.emit(!this.isCommentSectionOpened);
  }
}
