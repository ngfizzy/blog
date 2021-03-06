import { Component, OnInit, Input } from '@angular/core';
import { CategorySummary } from '../../../authors-portal-shared/models';

@Component({
  selector: 'app-authors-category-summary-widget',
  template: `
    <div class="mat-elevation-z2 mb-2 content-background-color widget">
      <h4 class="text-capitalize title">
        <a [routerLink]="['.', 'categories', categorySummary.categoryId]">
          {{ categorySummary.categoryName }}
        </a>
      </h4>
      <div>
        <span class="data-description"
          >Articles: {{ categorySummary.articlesCount }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .widget {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 2%;
        height: 4.77rem;
        width: 100%;
        padding: 0.5rem;
        font-weight: bolder;
      }
      .title > a {
        color: #fcd581;
      }
      .title {
        font-size: 1.3rem;
        border-bottom: 1px solid;
      }
      .article-title {
        width: 15rem;
      }
      .data-description {
        font-size: .8rem;
        font-weight: bolder;
        color: #fff;/
      }

      .widget,
      .title,
      .article-title
      .data-description
      {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ],
})
export class CategorySummaryWidgetComponent implements OnInit {
  @Input() categorySummary: CategorySummary;

  constructor() {}

  ngOnInit() {}
}
