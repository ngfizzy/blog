import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models';

@Component({
  selector: 'app-featured-articles-list-item',
  template: `
    <a [routerLink]="['/articles', article.id]">
<mat-list-item
    (click)="emitPayload()"
    class="item mb-1 w-100"
  >


    <img matListAvatar [src]="article?.themeImage || defaultImage">
        <h3 matLine>{{ article.title}}</h3>

    </mat-list-item>
    </a>

  `,
  styles: [`
    .item {
      background-color: rgba(255, 255, 255, .5)
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedArticlesListItemComponent implements OnInit {
  @Input() article: Article;
  @Output() clicked = new EventEmitter<{ title: string; }>();

  defaultImage = 'assets/code.jpeg';

  ngOnInit() {
  }

  emitPayload() {
    this.clicked.emit(this.article);
  }
}
