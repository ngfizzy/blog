import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authors-post-list-toolbar',
  templateUrl: './authors-post-list-toolbar.component.html',
  styleUrls: [ '../shared-styles/authors-toolbar.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsPostListToolbarComponent implements OnInit {
  @Input() isCreating: boolean;
  @Input() isSearching: boolean;

  @Output() toggleCreateForm = new EventEmitter<null>();
  @Output() toggleSearchForm = new EventEmitter<null>();

  constructor() { }

  ngOnInit() { }
}
