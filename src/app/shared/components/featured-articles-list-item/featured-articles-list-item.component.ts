import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models';

@Component({
  selector: 'app-featured-articles-list-item',
  template: `<mat-list-item
    (click)="emitPayload()"
    class="item w-100"
  >

      <img matListAvatar [src]="article?.themeImage || defaultImage">
      <h3 matLine>{{ article.title}}</h3>
    </mat-list-item>
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
