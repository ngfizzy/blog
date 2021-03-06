import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `

    <mat-list-item
      (click)="emitPayload()"
      class="list-group-item item"
    >
      {{item.title}}
    </mat-list-item>
  `,
  styles: [`
    .item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      background-color: rgba(210, 210, 255, .2);
      border-color: rgba(30, 30, 47, 0.977);
      color: rgba(255, 255, 255, 1);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: unknown & { title: string};
  @Output() clicked = new EventEmitter<unknown & { title: string }>();


  constructor() { }

  emitPayload() {
    this.clicked.emit(this.item);
  }
}
