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
  isEditingTitle: boolean;
  isCreating: boolean;
  isSearching: boolean;
  postListItemConfig: PostComponentConfig;
  postStatus$: Observable<'saved' | 'erred' | 'saving'>;
  selectedPostId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromAuthorsPosts.AuthorsPostsState>
  ) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.route.paramMap.subscribe(
      (paramMap) => {
        const id =  paramMap.get('id');
        this.selectedPostId =  id ? +id : null;
      },
    );

    this.postListItemConfig = this.getPostsConfig();

    this.store.dispatch(new fromAuthorsPostsActions.GetPosts());

    this.posts$ = this.store.pipe(
      select(fromAuthorsPosts.getPosts)
    );
    this.selectedPost$ = this.store.pipe(
      select(fromAuthorsPosts.viewPost)
    );
    this.postStatus$ = this.store.pipe(
      select(fromAuthorsPosts.selectPostStatus),
    );
  }

  createPost(title: string) {
    this.store.dispatch(
      new fromAuthorsPostsActions.CreatePost({ title, body: 'New Post'}),
    );

    this.isCreating = false;
  }

  showFullPost(postId: number) {
    this.router.navigate(['authors/posts', postId]);
  }

  search() {}

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

  saveTitle(title: string, postId: number) {
    this.selectedPostId = postId;

    if (this.selectedPostId) {
      this.store.dispatch(
        new fromAuthorsPostsActions.EditPostTitle({
          title, postId: this.selectedPostId
        }),
      );
    }
  }

  gotoPublishPage(postId: number) {
    this.router.navigate(['authors/posts', postId, 'publish']);
  }
}
