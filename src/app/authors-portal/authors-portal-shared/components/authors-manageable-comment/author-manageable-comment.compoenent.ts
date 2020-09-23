import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models';

@Component({
  selector: 'app-authors-manageable-comment',
  template: `
    <div class="row w-100 mb-3 mx-auto rounded authors-manageable-comment">
      <mat-toolbar class="col-12 toolbar">
        <span>{{comment.audience}}</span>
        <button class="d-inline-block ml-auto btn btn-primary p-2"><i class="fa fa-trash"></i></button>
      </mat-toolbar>

      <div class="col-12 pl-sm-2 pr-sm-2 pl-5 pr-5 wrapper">
          <app-comment class="w-100 mx-auto"[comment]="comment"> </app-comment>
      </div>
    </div>
  `,
  styles: [`
    .authors-manageable-comment {
      background-color: rgba(30, 30, 36, 0.5);
    }

    .toolbar {
      width: 100%;
      background-color: rgba(30, 30, 36, 0.5)
    }

    .wrapper {
      width: 98%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsManageableCommentComponent implements OnInit {
  @Input() comment: Comment & { date: string; audience: string };

  constructor() { }

  ngOnInit() { }
}
