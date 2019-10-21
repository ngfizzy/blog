import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from 'src/app/shared/models/post.interface';
import { PostComponentConfig } from 'src/app/shared/models/post-component-config.interface';
import * as fromAuthorsPosts from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors-posts',
  templateUrl: './authors-posts.component.html',
  styleUrls: ['./authors-posts.component.scss']
})
export class AuthorsPostsComponent implements OnInit {
  defaultPostId = 0;
  selectedPost$: Observable<Post>;
  posts$: Observable<Post[]>;
  postListItemConfig: PostComponentConfig;

  constructor(
    private router: Router,
    private store: Store<fromAuthorsPosts.AuthorsPostsState>
  ) { }

  ngOnInit() {
    this.initialize();
    this.showFullPost();
  }

  initialize() {
    this.postListItemConfig = this.getPostsConfig();

    this.store.dispatch(new fromAuthorsPostsActions.GetPosts());
    this.store.dispatch(
      new fromAuthorsPostsActions.ViewPost(this.defaultPostId)
    );

    this.posts$ = this.store.pipe(select(fromAuthorsPosts.getPosts));
    this.selectedPost$ = this.store.pipe(select(fromAuthorsPosts.viewPost));
  }

  showFullPost(postId?: number, navigate: boolean = true) {
    this.store.dispatch(
      new fromAuthorsPostsActions.ViewPost(postId || this.defaultPostId)
    );

    if (navigate) {
      this.router.navigate(['authors/posts', postId || this.defaultPostId]);
    }
  }

  getPostsConfig() {
    return  {
      isActive: false,
      isExpandedView: false,
      isTouched: false,
      canToggle: false,
      isMini: true,
      isFull: false,
      shouldHideShadows: true,
    };
  }
}
