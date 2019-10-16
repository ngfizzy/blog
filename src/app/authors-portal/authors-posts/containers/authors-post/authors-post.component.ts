import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuthorsPostsState from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
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
     this.route.params.pipe(
      // tap(param => this.postId = +param.id),
      map((params) => this.store.dispatch(
        new fromAuthorsPostsActions.ViewPost(params.id)
      )),
    ).subscribe();

     this.post$ = this.store.pipe(select(fromAuthorsPostsState.viewPost));
     this.isLoading$ = this.store.pipe(
       select(fromAuthorsPostsState.isPostLoading)
     );
  }
}
