import { AboutComponent } from './../../../../about/about.component';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-author-quick-action-button',
  template: `
    <div
      (click)="clicked.emit()"
      class="p-1 d-flex mat-elevation-z1 rounded flex-column justify-content-between quick-action"
      [class.mat-elevation-z3]="mouseEntered"
      (mouseenter)="mouseEntered = true"
      (mouseleave)="mouseEntered = false"
    >
      <div>
        <i class="{{ faIconClass }}"> </i>
      </div>
      <div class="quick-action-title">
        {{ quickActionTitle }}
      </div>
    </div>
  `,
  styles: [
    `
      .quick-action {
        background-color: rgba(210, 210, 255, 0.1);
        height: 70px;
        width: 200px;
        transition: all 0.5s ease-in-out;
      }
      .quick-action-title {
        font-size: 0.8rem;
      }
    `,
  ],
})
export class QuickActionButtonComponent {
  @Input() faIconClass: string;
  @Input() quickActionTitle: string;
  @Output() clicked = new EventEmitter();

  mouseEntered = false;
}
