import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from 'src/app/shared/models';

@Component({
  selector: 'app-authors-tag',
  template: `
  <span
    class="
    d-inline-block
    mb-2 author-tag
    rounded-pill
    p-1
    font-italic"
  >
    <span>#</span>
    <span>{{tag.name}}</span>
    <span
      class="d-inline-block fa fa-remove text-primary btn-remove-tag"
      (click)="removeTag(tag.id)"
    ></span>
  </span>
  `,
  styles: [`
    .author-tag {
      background-color: #f8f9faa3;
    }
    .btn-remove-tag {
       max-width: 3rem;
    }
  `],
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
