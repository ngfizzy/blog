import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authors-post-title',
  templateUrl: './authors-post-title.component.html',
  styleUrls: [ './authors-post-title.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsPostTitleComponent implements OnInit {
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
