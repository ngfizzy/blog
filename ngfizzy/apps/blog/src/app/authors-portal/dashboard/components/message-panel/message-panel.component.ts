import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Message } from '@ngfizzy/entities';

@Component({
  selector: 'app-message-panel',
  template: `
    <mat-expansion-panel class="panel">
        <mat-expansion-panel-header>
          <mat-panel-title class="fa fa-envelope">
          </mat-panel-title>
        <mat-panel-description>
          <strong>Message From {{ message.email }}</strong>
        </mat-panel-description>
        </mat-expansion-panel-header>
        <div><strong>Email: </strong> {{ message.email }}</div>
        <div><strong>name: </strong> {{ message.name }}</div>
        <p>
          {{ message.message }}
        </p>
    </mat-expansion-panel>
  `,
  styles: [
    `
      .panel {
        background-color: rgba(210, 210, 255, 0.2);
        color: #fff;
        margin-bottom: .2rem;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagePanelComponent implements OnInit {
  @Input() message: Message;

  constructor() { }

  ngOnInit() { }
}
