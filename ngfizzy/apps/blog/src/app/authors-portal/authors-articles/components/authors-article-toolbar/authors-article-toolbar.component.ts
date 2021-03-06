import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-authors-articles-toolbar',
  templateUrl: './authors-article-toolbar.component.html',
  styleUrls: [
    '../shared-styles/authors-toolbar.scss',
    './authors-article-toolbar.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsArticleToolbarComponent implements OnInit {
  @Input() selectedArticleTitle: string;
  @Input() selectedArticleId: number;
  @Input() isEditingTitle: boolean;
  @Input() articleStatus: 'saved' | 'saving' | 'erred' = 'saved';
  @Input() published: boolean;

  @Output() editTitle = new EventEmitter<boolean>();
  @Output() deleteArticle = new EventEmitter<number>();
  @Output() saveTitle = new EventEmitter<string>();
  @Output() commentsToggled = new EventEmitter<number>();
  @Output() togglePublished = new EventEmitter<{
    articleId: number;
    published: boolean;
  }>();

  ngOnInit() {}

  toggleEditingTitleMode() {
    const isEditing = !this.isEditingTitle;

    this.editTitle.emit(isEditing);
  }

  emitDeleteEvent() {
    this.deleteArticle.emit(this.selectedArticleId);
  }

  onSaveTitle(title: string) {
    this.saveTitle.emit(title);

    this.toggleEditingTitleMode();
  }

  toggleCommentsSection() {
    this.commentsToggled.emit(this.selectedArticleId);
  }

  gotoPublishPage(articleId: number) {
    this.togglePublished.emit({ articleId, published: this.published });
  }
}
