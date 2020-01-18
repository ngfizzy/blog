import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription, fromEvent, Subject } from 'rxjs';
import { map, debounceTime, switchMap, takeUntil, throttleTime } from 'rxjs/operators';

import * as fromAuthorsPostsState from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: [ './post-edit.component.scss' ]
})
export class PostEditComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('editor' , { static: true, read: ElementRef }) editor: ElementRef;

  unsubscribe$ = new Subject();

  post: Post;
  postBody: string;
  options = {
    hideIcons: [ 'FullScreen' ]
  };
  isLoading: boolean;
  postId: number;

  constructor(
    private store: Store<fromAuthorsPostsState.AuthorsPostsState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.setPostState();
    this.postBody = this.post.body;
  }

  ngAfterViewInit(): void {
    this.saveAfterTime(3000);
    this.changePostStatutsAfterTime(1000);
  }

  private saveAfterTime(time: number) {
    fromEvent(this.editor.nativeElement, 'keyup').pipe(
      debounceTime(time),
      switchMap(() => this.route.params.pipe(
        map((params) => this.postId = params.id)
      )),
      takeUntil(this.unsubscribe$)
    ).subscribe((postId) => {
      const post: Partial<Post> = { body: this.postBody };
      return this.store.dispatch(
        new fromAuthorsPostsActions.EditPost({ post, postId })
      );
    });
  }

  private changePostStatutsAfterTime(time: number) {
    fromEvent(this.editor.nativeElement, 'keyup').pipe(
      throttleTime(time),
      takeUntil(this.unsubscribe$),
    ).subscribe(()  => {
      this.store.dispatch(
        new fromAuthorsPostsActions.ChangePostStatus('saving')
      );
    });
  }

  private setPostState() {
    this.store.pipe(
      select(fromAuthorsPostsState.viewPostState),
      takeUntil(this.unsubscribe$)
    ).subscribe((postState) => {
      this.isLoading = postState.isLoading;
      this.post = postState.post;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
