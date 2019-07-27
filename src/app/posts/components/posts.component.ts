import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, of, Observable } from 'rxjs';

import * as fromPosts from '../state';
import * as fromPostsActions from '../state/posts.actions';
import { Post } from '../models/post.interface';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
posts$: Observable<Post[]>;


constructor(private store: Store<any>) {}

  ngOnInit() {
    this.posts$ = this.getPosts();
  }

  getPosts(): Observable<Post[]> {
    this.store.dispatch(new fromPostsActions.GetAllPosts());

    return this.store.pipe(select(fromPosts.getAllPosts));
  }
}
