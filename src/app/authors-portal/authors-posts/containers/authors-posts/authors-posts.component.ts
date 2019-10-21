import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

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
  selectedPostTitle$: Observable<string>;
  posts$: Observable<Post[]>;
  postListItemConfig: PostComponentConfig;

  constructor(
    private store: Store<fromAuthorsPosts.AuthorsPostsState>
  ) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.postListItemConfig = this.getPostsConfig();

    this.store.dispatch(new fromAuthorsPostsActions.GetPosts());

    this.posts$ = this.getAllPosts();
    this.selectedPostTitle$ = this.getSelectedPostTitle();
  }

  getAllPosts() {
    return this.store.pipe(select(fromAuthorsPosts.getPosts));
  }

  getSelectedPostTitle() {
    return this.store.pipe(select(fromAuthorsPosts.getPostTitle));
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
