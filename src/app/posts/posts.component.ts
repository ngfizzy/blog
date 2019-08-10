import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromPosts from './state';
import * as fromPostsActions from './state/posts.actions';
import { PostsState } from './state/posts.state';
import { Post } from '../shared/models/post.interface';
import { PostComponentConfig } from '../shared/models/post-component-config.interface';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
posts$: Observable<Post[]>;
postConfig: PostComponentConfig = {
  isActive: false,
  isExpandedView: false,
  isTouched: false,
  canToggle: true
};


constructor(private store: Store<PostsState>) {}

  ngOnInit() {
    this.posts$ = this.getPosts();
  }

  getPosts(): Observable<Post[]> {
    this.store.dispatch(new fromPostsActions.GetAllPosts());

    return this.store.pipe(select(fromPosts.getAllPosts));
  }
}
