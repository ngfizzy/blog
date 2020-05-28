import { ArticleStatistics } from './models/article-statistics.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ArticleEngagement } from './models';

@Component({
  selector: 'app-authors-number-widget',
  template: `
    <div class="mat-elevation-z2 widget">
      <h4 class="title">{{ statistics.statisticsTitle }}</h4>
      <h6 class="article-title">
        <a [routerLink]="['.', 'articles', statistics.articleId]">
          {{ statistics.articleTitle }}
        </a>
      </h6>

      <div>
        <span class="data-description">Likes: </span>{{ statistics.count }}
      </div>
    </div>
  `,
  styles: [
    `
      .widget {
        border-radius: 2%;
        height: 6.5rem;
        width: 15rem;
        padding: 0.5rem;
        font-weight: bolder;
        background-color: rgba(206, 183, 179, 0.2);
      }
      .title {
        font-size: 1.2rem;
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
