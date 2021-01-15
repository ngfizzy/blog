import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Comment } from '../../models';

@Component({
  selector: 'app-comment',
  template: `
    <div class="mat-elevation-z1 row mt-2 rounded comment">
      <span class="col-12 text-info audience-name">
        <span *ngIf="comment.audience" class="text-capitalize">
          {{ comment.audience }}:
        </span>
        <span class="text-info audience-name" *ngIf="!comment.audience">
          Anonymous Says
        </span>
      </span>
      <div class="col-sm-12 audience-comment" [class.text-muted]="comment.isDeleted">
         {{ comment.comment }}
         <div class="text-right text-info">{{ comment.date | timeago:'live' | secondsToJustNow }}</div>
      </div>
    </div>
  `,
  styles: [`
    .comment {
      padding: 1rem;
      width: 98%;
      margin: auto;
      display: flex;
      position: relative;
      color: white;
      background-color: #575f675c;
      margin-bottom: 1rem;
    }

    .audience-name {
      text-decoration: underline;
      padding-right: 10px;
      font-size: 105%;
    }

    .audience-comment {
      font-size: 80%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
  @Input() comment: Comment & { date: Date , audience: string };

}
