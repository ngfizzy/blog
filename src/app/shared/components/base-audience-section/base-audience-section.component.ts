import { Component, Input, OnInit } from '@angular/core';
import { Audience, AudienceActivity, Comment } from '../../models';

@Component({ template: ''})
export class BaseAudienceSectionComponent {
  @Input() currentAudience: Audience;
  @Input() activities: AudienceActivity[] = [];

  get comments(): Array<Comment & { date: string, audience: string }> {
    const activities =
      this.activities?.filter(activity => !!activity.comments);

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
      this.activities?.reduce(
        (accumulator, activity) => accumulator + activity?.applauds,
        0,
      );

    return applauds || 0;
  }

  get currentAudienceActivities() {
    return (
      this.activities?.find(
        activity =>
          activity.audience?.deviceUUID === this.currentAudience?.deviceUUID,
      )
    );
  }
}
