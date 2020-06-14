import { ArticleStatistics } from '../../models/article-statistics.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-number-widget',
  template: `
    <div class="mat-elevation-z2 mb-2 content-background-color widget">
      <h4 class="title">{{ statistics.statisticsTitle }}</h4>
      <h6 class="article-title" *ngIf="statistics.articleTitle">
        <a [routerLink]="['.', 'articles', statistics.articleId]">
          {{ statistics.articleTitle }}
        </a>
      </h6>

      <div>
        <span class="data-description">{{ statistics.countLabel }}: </span
        >{{ statistics.count }}
      </div>
    </div>
  `,
  styles: [
    `
      .widget {
        border-radius: 2%;
        height: 6.5rem;
        width: 13.5rem;
        padding: 0.5rem;
        font-weight: bolder;
      }
      .title {
        font-size: 1rem;
        border-bottom: 1px solid;
      }
      .article-title {
        width: 15rem;
        overflow: hidden;
        text-wrap: wrap;
      }
      .data-description {
        font-size: 1rem;
        font-weight: bolder;
      }
    `,
  ],
})
export class NumberWidgetComponent implements OnInit {
  @Input() statistics: ArticleStatistics;

  constructor() {}

  ngOnInit() {}
}