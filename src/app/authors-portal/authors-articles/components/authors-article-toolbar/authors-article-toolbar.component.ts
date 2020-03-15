import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

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

  @Output() editTitle = new EventEmitter<boolean>();
  @Output() saveTitle = new EventEmitter<string>();
  @Output() gotoPublish = new EventEmitter<number>();

  ngOnInit() {}

  toggleEditingTitleMode() {
    const isEditing = !this.isEditingTitle;

    this.editTitle.emit(isEditing);
  }

  onSaveTitle(title: string) {
    this.saveTitle.emit(title);

    this.toggleEditingTitleMode();
  }

  gotoPublishPage(articleId: number) {
    this.gotoPublish.emit(articleId);
  }
}
