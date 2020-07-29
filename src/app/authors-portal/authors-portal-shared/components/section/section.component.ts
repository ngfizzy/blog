import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-section',
  template: `
    <div class="w-100 mb-5">
      <div class="w-100">
        <h4>
          {{ sectionTitle }}
        </h4>
        <p class="w-50 border-bottom"></p>
      </div>
      <div class="w-100 d-flex flex-wrap">
      <mat-progress-spinner
        *ngIf="isLoading"
        class="p-fixed mt-5 mx-auto"
        mode="indeterminate"
        value="75"
        diameter="100"
        title="'saving'"
      ></mat-progress-spinner>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class SectionComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() isLoading: boolean;

  constructor() {}

  ngOnInit() {}
}
