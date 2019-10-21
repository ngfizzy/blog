import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuthorsPostsState from '../../state';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.interface';
import { PostComponentConfig } from 'src/app/shared/models/post-component-config.interface';

@Component({
  selector: 'app-authors-post',
  templateUrl: './authors-post.component.html',
  styleUrls: [ './authors-post.component.scss']
})

export class AuthorsPostComponent implements OnInit {
  config: PostComponentConfig = {
    isActive: false,
    isExpandedView: true,
    isTouched: false,
    canToggle: false,
    isFull: true,
    shouldHideShadows: true,
    shouldShowActions: false,
  };

  postId = 0;
  post$: Observable<Post>;
  isLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromAuthorsPostsState.AuthorsPostsState
    >) { }

  ngOnInit() {
     this.post$ = this.store.pipe(select(fromAuthorsPostsState.viewPost));
     this.isLoading$ = this.store.pipe(
       select(fromAuthorsPostsState.isPostLoading)
     );
  }
}
