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
  Audience,
  ApplaudPayload,
  CommentPayload,
  AudienceActivity
} from '../../models';
import { BaseAudienceSectionComponent } from '../base-audience-section/base-audience-section.component';

@Component({
  selector: 'app-audience-section',
  templateUrl: './audience-section.component.html',
  styleUrls: ['./audience-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudienceSectionComponent extends BaseAudienceSectionComponent implements OnInit, OnChanges {
  @Input() articleId: number;

  @Input() currentAudienceApplauds: number;
  @Input() isCommentSectionOpen = false;
  @Input() growToFitContent = false;

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
