import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromPublic from '../state';
import * as fromPublicActions from '../state/public.actions';

import { PostComponentConfig } from '../../shared/models/post-component-config.interface';
import { Post } from '../../shared/models/post.interface';

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
    private store: Store<fromPublic.PublicState>) {}

  ngOnInit() {
    this.store.dispatch(new fromPublicActions.GetOnePost(1));
    this.router.params.pipe(
      takeUntil(this.destroy$),
    ).subscribe((params) => {
      this.post$ = this.store.pipe(
        select(fromPublic.selectPost)
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
