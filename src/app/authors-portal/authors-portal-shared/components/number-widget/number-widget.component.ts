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
        >
        <span class="value">{{ statistics.count }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .widget {
        border-radius: 2%;
        height: 6.5rem;
        width: 100%;
        padding: 0.5rem;
        font-weight: bolder;
      }
      .title {
        font-size: 1rem;
        border-bottom: 1px solid;
      }
      .article-title {
        width: 15rem;
      }
      .data-description,
      .value
       {
        font-size: .8rem;
        font-weight: bolder;
        color: #fff;
      }


      .widget,
      .title,
      .article-title
      .data-description,
      .value
      {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ],
})
export class NumberWidgetComponent implements OnInit {
  @Input() statistics: ArticleStatistics;

  constructor() {}

  ngOnInit() {}
}
