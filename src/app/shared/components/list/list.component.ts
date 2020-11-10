import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Article } from 'src/app/shared/models';

@Component({
  selector: 'app-list',
  template: `
    <mat-list class="w-100 list-group list">
      <div *ngIf="isLoading" class="list-spinner-container">
        <app-loading-and-empty-state
          [isLoading]="isLoading"
          [content]="items?.length"
        >
        </app-loading-and-empty-state>
      </div>
      <app-list-item
        *ngFor="let item of items"
        [item]="item"
        (clicked)="onSelectItem($event)"
      >
      </app-list-item>
    </mat-list>
  `,
  styles: [`
    .list{
      height: 79%;
    }
    .list-spinner-container {
      position: absolute;
      z-index: 2000;
      width: 100% !important;
      top: 25% !important;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() items: Array<unknown & { title: string }>;
  @Input() isLoading: boolean;

  @Output() itemSelected = new EventEmitter<unknown>();

  onSelectItem(payload: unknown) {
    this.itemSelected.emit(payload);
  }
}
