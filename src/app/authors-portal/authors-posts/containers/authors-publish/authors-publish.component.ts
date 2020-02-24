import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, flatMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromAuthorsPosts from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models';

@Component({
  selector: 'app-authors-publish',
  templateUrl: './authors-publish.component.html',
  styleUrls: [ './authors-publish.component.scss' ],
})
export class AuthorsPublishComponent implements OnInit {
  isEditingPostTitle: boolean;
  category: string;
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private  store: Store<fromAuthorsPosts.AuthorsPostsState>
  ) { }

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      tap(paramsMap =>
        this.store.dispatch(
          new fromAuthorsPostsActions.ViewPost(+paramsMap.get('id'))
        ),
      ),
      flatMap(() => this.store.pipe(select(fromAuthorsPosts.viewPost)))
    );
  }

  addTag(tag: string, postId: number) {
    this.store.dispatch(new fromAuthorsPostsActions.TagPost({ tag, postId}));
  }

  removeTag(tagId: number, postId: number) {
    this.store.dispatch(new fromAuthorsPostsActions.UntagPost({tagId, postId}));
  }

  addToCategory(category: string, postId: number) {
    this.store.dispatch(new fromAuthorsPostsActions.CategorizePost({ category, postId}));
  }
}
