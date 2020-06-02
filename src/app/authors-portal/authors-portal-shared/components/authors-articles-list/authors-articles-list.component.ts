import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/shared/models/article.interface';

@Component({
  selector: 'app-authors-articles-list',
  templateUrl: './authors-articles-list.component.html',
  styleUrls: [ './authors-articles-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsArticlesListComponent implements OnInit {
 @Input() articlesList: Article[];
 @Output() showFullArticle = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onShowFullArticle(articleId: number) {
    this.showFullArticle.emit(articleId);
  }
}
