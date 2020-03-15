import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-authors-article-list-toolbar',
  templateUrl: './authors-article-list-toolbar.component.html',
  styleUrls: [ '../shared-styles/authors-toolbar.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsArticleListToolbarComponent implements OnInit {
  @Input() isCreating: boolean;
  @Input() isSearching: boolean;

  @Output() toggleCreateForm = new EventEmitter<null>();
  @Output() toggleSearchForm = new EventEmitter<null>();

  constructor() { }

  ngOnInit() { }
}
