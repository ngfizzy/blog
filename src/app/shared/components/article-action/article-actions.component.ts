import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Article, Audience, ApplaudPayload } from '../../models';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AudienceActivity } from '../../models/audience-activity.interface';

@Component({
  selector: 'app-article-actions,app-poem-actions',
  templateUrl: 'article-actions.component.html',
  styleUrls: ['./article-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [
    trigger('transitionInOut', [
      state(
        'void',
        style({
          height: 0,
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          height: 'fit-content',
          opacity: 1,
        })
      ),
      transition('void => *, * => void', animate('.5s ease')),
    ]),
  ],
})
export class ArticleActionsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() articleId: number;
  @Input() activities: AudienceActivity[] = [];
  @Input() currentAudience: Audience;
  @Input() currentAudienceApplauds: number;

  @Output() applaud = new EventEmitter<ApplaudPayload>();
  @Output() commentSectionToggled = new EventEmitter<boolean>();
  @Output() addComment = new EventEmitter<AudienceActivity>();
  @Output() updateUserApplaud = new EventEmitter<number>();

  isCommentSectionOpen = false;
  showSubmit = false;
  comment = '';

  isClapping = false;

  get comments() {
    const activities =
      this.activities &&
      this.activities.filter((activity) => !!activity.comments);

    const com = (activities || []).map((activity) =>
      activity.comments.map((comment) => ({
        audience: activity.audience.audienceName,
        comment: comment.comment,
        date: comment.createdAt,
      }))
    );

    return [].concat(...com);
  }

  get totalApplauds() {
    return (
      this.activities &&
      this.activities
        .map((activity) => activity.applauds)
        .reduce((prev, curr) => prev + curr)
    );
  }

  get currentAudienceActivities() {
    return (
      this.activities &&
      this.activities.find(
        (activity) =>
          activity.audience.deviceUUID === this.currentAudience.deviceUUID
      )
    );
  }

  constructor() {}

  ngOnInit() {
    const currentAudienceApplauds = this.currentAudienceActivities
      ? this.currentAudienceActivities.applauds
      : 0;

    this.updateUserApplaud.emit(currentAudienceApplauds);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.activities && changes.activities.currentValue) {
      this.isClapping = false;
    }
  }

  submitComment() {}

  clap() {
    this.isClapping = true;

    let applauds = this.currentAudienceApplauds || 0;

    applauds = applauds < 50 ? applauds + 1 : 0;
    this.updateUserApplaud.emit(applauds);

    this.applaud.emit({
      applauds,
      articleId: this.articleId,
      audience: this.currentAudience,
    });
  }

  toggleCommentSection() {
    this.isCommentSectionOpen = !this.isCommentSectionOpen;
    this.commentSectionToggled.emit(this.isCommentSectionOpen);
  }

  ngOnDestroy() {}
}
