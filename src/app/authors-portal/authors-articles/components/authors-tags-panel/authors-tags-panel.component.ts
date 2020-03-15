import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from 'src/app/shared/models';

@Component({
  selector: 'app-authors-tags-panel',
  templateUrl: './authors-tags-panel.component.html',
  styleUrls: [ './authors-tags-panel.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsTagsPanelComponent implements OnInit {
  @Input() tags: Tag[] = [];
  @Output() remove = new EventEmitter<number>();
  @Output() add =  new EventEmitter<string>();

  tag: string;
  showTagForm = false;

  constructor() { }

  ngOnInit() { }

  removeTag(tagId: number) {
    this.remove.emit(tagId);
  }

  addTag() {
    this.add.emit(this.tag);
  }
}
