import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Article,
  Audience,
  ApplaudPayload,
  CommentPayload,
} from '../../models';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AudienceActivity } from '../../models/audience-activity.interface';

@Component({
  selector: 'app-article-actions',
  templateUrl: './article-actions.component.html',
  styleUrls: ['./article-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  animations: [
    trigger('transitionInOut', [
      state(
        'void',
        style({
          height: 0,
          opacity: 0,
        }),
      ),
      state(
        '*',
        style({
          height: 'fit-content',
          opacity: 1,
        }),
      ),
      transition('void => *, * => void', animate('.5s ease')),
    ]),
  ],
})
export class ArticleActionsComponent implements OnInit, OnChanges {
  @Input() articleId: number;
  @Input() activities: AudienceActivity[] = [];
  @Input() currentAudience: Audience;
  @Input() currentAudienceApplauds: number;
  @Input() isPoetrySection = false;

  @Output() applaud = new EventEmitter<ApplaudPayload>();
  @Output() addComment = new EventEmitter<CommentPayload>();
  @Output() updateUserApplaud = new EventEmitter<number>();

  isCollectingAudDetails = false;
  canContinue = false;
  comment = '';
  email: string;
  name: string;

  isClapping = false;

  get comments() {
    const activities =
      this.activities &&
      this.activities.filter(activity => !!activity.comments);

    const com = (activities || []).map(activity =>
      activity.comments.map(comment => ({
        audience: activity.audience.audienceName,
        comment: comment.comment,
        date: comment.createdAt,
      })),
    );

    return [].concat(...com);
  }

  get totalApplauds() {
    const applauds =
      this.activities &&
      this.activities.reduce(
        (accumulator, activity) => accumulator + activity.applauds,
        0,
      );

    return applauds || 0;
  }

  get currentAudienceActivities() {
    return (
      this.activities &&
      this.activities.find(
        activity =>
          activity.audience.deviceUUID === this.currentAudience.deviceUUID,
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
      this.isCollectingAudDetails = false;
      this.comment = '';
    }

    if (changes.currentAudience && !changes.currentAudience.isFirstChange()) {
      this.email = (this.currentAudience && this.currentAudience.email) || '';
      this.name =
        (this.currentAudience && this.currentAudience.audienceName) || '';
    }
  }

  submitComment() {
    const audience: Audience = {
      ...this.currentAudience,
      audienceName: this.name,
      email: this.email,
    };

    this.addComment.emit({
      audience,
      articleId: this.articleId,
      comment: this.comment,
    });
  }

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
}
