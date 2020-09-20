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
import {
  Audience,
  ApplaudPayload,
  CommentPayload,
  AudienceActivity
} from '../../../shared/models';

@Component({
  selector: 'app-poetry-actions',
  templateUrl: './poetry-actions.component.html',
  styleUrls: ['./poetry-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoetryActionsComponent implements OnInit, OnChanges {
  @Input() articleId: number;
  @Input() activities: AudienceActivity[] = [];
  @Input() currentAudience: Audience;
  @Input() currentAudienceApplauds: number;
  @Input() isCommentSectionOpen = false;

  @Output() applaud = new EventEmitter<ApplaudPayload>();
  @Output() commentSectionToggled = new EventEmitter<boolean>();
  @Output() addComment = new EventEmitter<CommentPayload>();
  @Output() updateUserApplaud = new EventEmitter<number>();


  canContinue = false;
  comment = '';
  email: string;
  name: string;

  isClapping = false;
  isCollectingAudDetails: boolean;

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

  clap(payload: ApplaudPayload) {
    this.updateUserApplaud.emit(payload.applauds);
    this.applaud.emit(payload);
  }
}
