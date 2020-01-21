import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from 'src/app/shared/models';

@Component({
  selector: 'app-authors-tag',
  templateUrl: './authors-tag.component.html',
  styleUrls: [ './authors-tag.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsTagComponent implements OnInit {
  @Input() tag: Tag;
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  removeTag(tagId: number) {
    this.remove.emit(tagId);
  }
}
