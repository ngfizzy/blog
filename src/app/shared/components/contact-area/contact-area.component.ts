import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-area',
  template: `
   <mat-accordion>
    <mat-expansion-panel hideToggle class="expansion-panel">
      <mat-expansion-panel-header class="expansion-panel-header">
        <mat-panel-title class="title">
          {{panelTitle}}
        </mat-panel-title>
      </mat-expansion-panel-header>
      <div class="mt-1">

      <ng-content> </ng-content>
    </div>
    </mat-expansion-panel>
    <mat-expansion-panel (opened)="panelOpenState = true"
                        (closed)="panelOpenState = false">
    </mat-expansion-panel>
  </mat-accordion>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .expansion-panel {
      background-color: #2A1A1F;
    }
    .expansion-panel-header {
      background-color: rgba(0,0,0, 0.4);
    }
    .title {
      color: rgb(255 255 255);
      font-size: 1rem;
      font-weight: 700;
    }

  `]
})
export class ContactAreaComponent implements OnInit {
  @Input() panelTitle;

  panelOpenState = false;

  constructor() { }

  ngOnInit() { }
}
