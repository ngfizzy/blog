import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PostState } from './state/post.state';
import * as fromPost from './state';
import * as fromPostActions from './state/one-post.actions';

import { PostComponentConfig } from '../shared/models/post-component-config.interface';
import { Post } from '../shared/models/post.interface';

@Component({
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.scss'],
})
export class OnePostComponent implements OnInit, OnDestroy {
  postConfig: PostComponentConfig = {
    isActive: true,
    isTouched: true,
    isExpandedView: true,
  };
  destroy$: Subject<null> = new Subject();
  post$: Observable<Post>;

  constructor(
    private router: ActivatedRoute,
    private store: Store<PostState>) {}

  ngOnInit() {
    this.store.dispatch(new fromPostActions.GetOnePost(1));
    this.router.params.pipe(
      takeUntil(this.destroy$),
    ).subscribe((params) => {
      this.post$ = this.store.pipe(
        select(fromPost.getOnePost)
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
