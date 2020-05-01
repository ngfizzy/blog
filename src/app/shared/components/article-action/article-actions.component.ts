import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article, Audience } from '../../models';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AudienceActivity } from '../../models/audience-activity.interface';

@Component({
  selector: 'app-article-actions,app-poem-actions',
  templateUrl: 'article-actions.component.html',
  styleUrls: [ './article-actions.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations:  [
    trigger('transitionInOut', [
      state('void', style({
        height: 0,
        opacity: 0,
      })),
      state('*', style({
        height: 'fit-content',
        opacity: 1,
      })),
      transition('void => *, * => void', animate('.5s ease'))
    ])
  ]
})
export class ArticleActionsComponent implements OnInit {
  @Input() article: Article;
  @Input() currentAudience: Audience;
  @Input() comments: any;


  @Output() applaud = new EventEmitter<AudienceActivity>();
  @Output() commentSectionToggled = new EventEmitter<boolean>();
  @Output() addComment = new EventEmitter<AudienceActivity>();

  isCommentSectionOpen = false;
  showSubmit = false;
  comment = '';

  constructor() { }

  ngOnInit() { }

  submitComment() {
  }

  toggleCommentSection() {
    this.isCommentSectionOpen = !this.isCommentSectionOpen;
    this.commentSectionToggled.emit(this.isCommentSectionOpen);
  }
}

