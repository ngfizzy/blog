import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input, OnDestroy, OnChanges } from '@angular/core';
import { Article, Audience } from '../../models';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AudienceActivity } from '../../models/audience-activity.interface';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
export class ArticleActionsComponent implements OnInit, OnDestroy, OnChanges {
  @Input() articleId: string;
  @Input() activities: AudienceActivity[] = [];
  @Input() currentAudience: Audience;


  @Output() applaud = new EventEmitter<number>();
  @Output() commentSectionToggled = new EventEmitter<boolean>();
  @Output() addComment = new EventEmitter<AudienceActivity>();


  isCommentSectionOpen = false;
  showSubmit = false;
  comment = '';

  private currentAudienceApplauds: number;

  get comments() {
    const activities = this.activities &&
      this.activities.filter(activity => !!activity.comments);

    const com = (activities || []).map((activity) =>
    activity.comments.map(comment => ({
        audience: activity.audience.audienceName,
        comment: comment.comment,
        date: comment.createdAt,
      }))
    );

    return [].concat(...com);
  }

  get totalApplauds() {
    return this.activities &&
      this.activities.map(activity => activity.applauds)
        .reduce((prev, curr) => (prev + curr));
  }

  get currentAudienceActivities() {
    return this.activities &&
      this.activities.find(activity =>
        activity.audience.deviceUUID === this.currentAudience.deviceUUID
      );
  }

  constructor() { }

  ngOnInit() {
    console.log('audience activitiessa', this.activities)
  }

   ngOnChanges() {
     console.log('>>>>>>>>>>>>>>>>>>>.. CURRENT AUDIENCE', this.currentAudience);
   }

  submitComment() {
  }

  clap() {
    console.log(' this is called >>>>>>>>>>>>')
    let { applauds } = this.currentAudienceActivities || { applauds: 0 } ;

    applauds = applauds < 50 ? applauds + 1 : 0;
    this.currentAudienceApplauds = applauds;

    this.applaud.emit(applauds);
  }

  toggleCommentSection() {
    this.isCommentSectionOpen = !this.isCommentSectionOpen;
    this.commentSectionToggled.emit(this.isCommentSectionOpen);
  }

  ngOnDestroy() {
  }
}

