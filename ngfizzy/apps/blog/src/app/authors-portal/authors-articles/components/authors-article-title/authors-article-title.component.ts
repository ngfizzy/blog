import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authors-article-title',
  templateUrl: './authors-article-title.component.html',
  styleUrls: [ './authors-article-title.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsArticleTitleComponent implements OnInit {
  @Input() title: string;
  @Input() isEditing = false;

  @Output() edit = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  toggleEditingState() {
    this.edit.emit(!this.isEditing);
  }

  saveTitle(title: string) {
    this.save.emit(title);
    this.edit.emit(!this.isEditing);
  }
}
