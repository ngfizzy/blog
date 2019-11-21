import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authors-posts-toolbar',
  templateUrl: './authors-post-toolbar.component.html',
  styleUrls: [
    '../shared-styles/authors-toolbar.scss',
    './authors-post-toolbar.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsPostToolbarComponent implements OnInit {
  @Input() selectedPostTitle: string;
  @Input() selectedPostId: number;
  @Input() isEditingTitle: boolean;
  @Input() postStatus: 'saved' | 'saving' | 'erred' = 'saved';

  @Output() editTitle = new EventEmitter<boolean>();
  @Output() saveTitle = new EventEmitter<string>();

  ngOnInit() {}

  toggleEditingTitleMode() {
    const isEditing = !this.isEditingTitle;

    this.editTitle.emit(isEditing);
  }

  onSaveTitle(title: string) {
    this.saveTitle.emit(title);

    this.toggleEditingTitleMode();
  }
}
