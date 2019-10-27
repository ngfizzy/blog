import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authors-post-list-toolbar',
  templateUrl: './authors-post-list-toolbar.component.html',
  styleUrls: [ '../shared-styles/authors-toolbar.scss' ]
})
export class AuthorsPostListToolbarComponent implements OnInit {
  @Input() isCreating: boolean;
  @Output() toggleCreateForm = new EventEmitter<null>();

  constructor() { }

  ngOnInit() { }
}
