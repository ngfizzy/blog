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
      <div class="w-100 d-flex">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class SectionComponent implements OnInit {
  @Input() sectionTitle: string;

  constructor() {}

  ngOnInit() {}
}
