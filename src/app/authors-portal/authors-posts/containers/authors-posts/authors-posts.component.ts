import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/models/post.interface';
import { PostComponentConfig } from 'src/app/shared/models/post-component-config.interface';
import * as fromAuthorsPosts from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';

@Component({
  selector: 'app-authors-posts',
  templateUrl: './authors-posts.component.html',
  styleUrls: ['./authors-posts.component.scss']
})
export class AuthorsPostsComponent implements OnInit {
  selectedPost$: Observable<Post>;
  posts$: Observable<Post[]>;
  selectedPostId = 0;
  isEditingTitle: boolean;
  isCreating: boolean;
  postListItemConfig: PostComponentConfig;

  constructor(
    private route: ActivatedRoute,
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
      new fromAuthorsPostsActions.ViewPost(this.selectedPostId)
    );

    this.posts$ = this.store.pipe(
      select(fromAuthorsPosts.getPosts)
    );
    this.selectedPost$ = this.store.pipe(
      select(fromAuthorsPosts.viewPost)
    );
  }

  createPost(title: string) {
    this.store.dispatch(
      new fromAuthorsPostsActions.CreatePost({ title, body: 'New Post'}),
    );

    this.isCreating = false;
  }

  showFullPost(postId?: number, navigate: boolean = true) {
    this.selectedPostId = postId ? postId : this.selectedPostId;
    this.store.dispatch(
      new fromAuthorsPostsActions.ViewPost(this.selectedPostId)
    );

    if (navigate) {
      this.router.navigate(['authors/posts', this.selectedPostId]);
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

  saveTitle(title: string) {
    const post: Partial<Post> = { title };
    this.store.dispatch(
      new fromAuthorsPostsActions.EditPost({
        post, postId: this.selectedPostId
      }),
    );
  }
}
