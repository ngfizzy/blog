import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-list-panel',
  template: `<div class="mat-elevation-z2 content-background-color list-panel">
    <div class="mat-elevation-z2 content-background-color title-wrapper">
      <h6 class="title-case">{{ listTitle }}</h6>
    </div>
    <div class="list-container">
      <ng-content></ng-content>
    </div>
  </div>`,
  styles: [
    `
      .title-wrapper {
        padding: 0.5rem;
      }
      .list-panel {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPanelComponent implements OnInit {
  @Input() listTitle: string;

  constructor() {}

  ngOnInit() {}
}
