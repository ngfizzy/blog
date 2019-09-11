import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.interface';
import { Store, select } from '@ngrx/store';
import { AuthorsPortalState } from './state/authors-portal.state';
import { getPosts, getPostsLoadingState } from './state';

@Component({
  templateUrl: './authors-portal.component.html',
  styleUrls: ['./authors-portal.component.scss']
})
export class AuthorsPortalComponent implements OnInit {
  posts$: Observable<Post[]>;
  isPostsLoading$: Observable<boolean>;

  constructor(private store: Store<AuthorsPortalState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(getPosts));
    this.isPostsLoading$ = this.store.pipe(select(getPostsLoadingState));
  }
}
