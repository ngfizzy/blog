import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { fromEvent, Subject } from 'rxjs';
import { map, debounceTime, switchMap, takeUntil, throttleTime } from 'rxjs/operators';

import * as fromAuthorsPostsState from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Post } from 'src/app/shared/models/post.interface';
import { Tag } from 'src/app/shared/models';

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
  postTags: Tag[] = [];
  isLoading: boolean;
  postId: number;

  constructor(
    private store: Store<fromAuthorsPostsState.AuthorsPostsState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.postId = +paramMap.get('id'),
    );

    this.setPostState();
    this.postBody = this.post.body;
  }

  ngAfterViewInit(): void {
    this.saveAfter(3000);
    this.changePostStatutsAfter(1000);
  }

  tagPost(tag: string) {
    this.store.dispatch(new fromAuthorsPostsActions.TagPost({
      tag,
      postId: this.postId,
     })
    );
  }

  untagPost(tagId: number) {
    this.store.dispatch(new fromAuthorsPostsActions.UntagPost({
      tagId,
      postId: this.postId,
    }));
  }

  /**
   * Wait for x milliseconds before saving
   *
   * @param time Time to wait before saving post in milliseconds
   */
  private saveAfter(time: number) {
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

  /**
   * Waits for x number of milliseconds before changing post save status
   *
   * @param time Time in ms to wait before changing save status
   */
  private changePostStatutsAfter(time: number) {
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
      this.postTags = postState.post.tags;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
