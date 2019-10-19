import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromAuthorsPostsState from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: [ './post-edit.component.scss' ]
})
export class PostEditComponent implements OnInit, OnDestroy {
  post: Post;

  options = {
    hideIcons: [ 'FullScreen' ]
  };
  isLoading: boolean;
  postStateSub: Subscription;

  constructor(
    private store: Store<fromAuthorsPostsState.AuthorsPostsState>,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.pipe(map(param => param.id))
      .subscribe((postId: number) => this.store.dispatch(
        new fromAuthorsPostsActions.ViewPost(postId)
      )
    );

    this.setPostState();
   }

  private setPostState() {
    this.postStateSub = this.store.pipe(
      select(fromAuthorsPostsState.viewPostState)
    ).subscribe((postState) => {
      this.isLoading = postState.isLoading;
      this.post = postState.post;
    });
  }

  ngOnDestroy(): void {
    this.postStateSub.unsubscribe();
  }
}
