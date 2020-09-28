import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-publish-section',
  template: `
  <div class="row p-2">
    <h4 class="text-light text-underline col-1 col-sm-12">{{ sectionTitle }}</h4>
    <div class="col-10 col-sm-12 ml-auto w-75 rounded publish-section">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  styles: [`
    .publish-section {
      background-color: #ffffff1a;
    }
    .text-underline {
      text-decoration: underline;
    }
  `]
})
export class AuthorsPublishSectionComponent implements OnInit {
  @Input() sectionTitle: string;

  constructor() { }

  ngOnInit() { }
}
