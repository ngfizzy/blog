import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuthorsPosts from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Post } from 'src/app/shared/models/post.interface';
import { Observable } from 'rxjs';
import { PostComponentConfig } from 'src/app/shared/models/post-component-config.interface';

@Component({
  selector: 'app-authors-posts',
  templateUrl: './authors-posts.component.html',
  styleUrls: ['./authors-posts.component.scss']
})
export class AuthorsPostsComponent implements OnInit {
  postListItemConfig: PostComponentConfig = {
    isActive: false,
    isExpandedView: false,
    isTouched: false,
    canToggle: false,
    isMini: true,
    isFull: false,
  };

  posts$: Observable<Post[]>;
  constructor(private store: Store<fromAuthorsPosts.AuthorsPostsState>) { }

  ngOnInit() {
    this.store.dispatch(new fromAuthorsPostsActions.GetPosts());
    this.getAllPosts();
  }

  getAllPosts() {
    this.posts$ = this.store.pipe(select(fromAuthorsPosts.getPosts));
  }
}
