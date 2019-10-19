import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuthorsPostsState from '../../state';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: [ './post-edit.component.scss' ]
})
export class PostEditComponent implements OnInit {
  options = {
    hideIcons: [ 'FullScreen' ]
  };

  constructor(private store: Store<fromAuthorsPostsState.AuthorsPostsState
    >) { }

  ngOnInit(): void { }
}
