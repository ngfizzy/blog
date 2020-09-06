import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading-and-empty-state',
  template: `
     <ng-container *ngIf="isLoading === true || isLoading === null">
        <mat-progress-spinner
          class="mx-auto"
          mode="indeterminate"
          value="90"
          diameter="50"
        >
        </mat-progress-spinner>
    </ng-container>

    <h5 class="text-center" *ngIf="!content && !isLoading">{{ emptyStateMessage }}</h5>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingAndEmptyStateComponent {
  @Input() emptyStateMessage = 'No Content';
  @Input() isLoading: boolean;
  @Input() content: any;

  constructor() {}

}
