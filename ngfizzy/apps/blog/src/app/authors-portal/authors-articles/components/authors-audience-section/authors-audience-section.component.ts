import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BaseAudienceSectionComponent } from '../../../../shared/components/base-audience-section/base-audience-section.component';

@Component({
  selector: 'app-authors-audience-section',
  template: `
    <div class="wrapper">
      <ng-container *ngFor="let comment of comments">
        <app-authors-manageable-comment
          [comment]="comment"
          (deleted)="deleteComment($event)"
        ></app-authors-manageable-comment>
      </ng-container>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 110%;
      overflow-y: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthorsAudienceSectionComponent extends BaseAudienceSectionComponent {
  @Output() commentDeleted = new EventEmitter<Comment & { audience: string; date: string; }>();

  deleteComment(comment: Comment & { audience: string; date: string; }) {
    this.commentDeleted.emit(comment);
  }
}
