import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animations } from './right-slideout-panel.animations';

@Component({
  animations,
  selector: 'app-right-slideout-panel',
  template: `
    <div
    class="backdrop"
    [ngClass]="{ 'hide': !isOpen }"
    *ngIf="isOpen"
    (click)="$event.stopPropagation(); toggle()"
    > </div>

    <div
      class="wrapper rounded"
      [ngClass]="{'hide': !isOpen}"
      (click)="$event.stopPropagation()"
    >
      <span [ngClass]="{'hide': !isOpen}" (click)="toggle()" class="text-left text-primary p-2 close-button">
        <i class="fa fa-times"></i>
      </span>
      <span [class.hide]="isOpen" (click)="toggle()" class="text-left text-primary p-2 open-button">
        <i class="fa fa-arrow-left"></i>
      </span>

      <div class="projected-content-wrapper" *ngIf="isOpen">
        <ng-content> </ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./right-slideout-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightSlideoutPanelComponent {
  @Input() isOpen: boolean;

  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }


  toggle() {
    this.toggled.emit(!this.isOpen);
  }
}
