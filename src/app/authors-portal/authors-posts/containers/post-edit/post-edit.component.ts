import { Component, OnInit, OnDestroy, ViewChild, ElementRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map, debounceTime, tap, switchMap } from 'rxjs/operators';

import * as fromAuthorsPostsState from '../../state';
import * as fromAuthorsPostsActions from '../../state/authors-posts.actions';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  templateUrl: './post-edit.component.html',
  styleUrls: [ './post-edit.component.scss' ]
})
export class PostEditComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild('editor' , { static: true, read: ElementRef}) editor: ElementRef;

  post: Post;
  postBody: string;
  options = {
    hideIcons: [ 'FullScreen' ]
  };
  isLoading: boolean;
  postStateSub: Subscription;
  isSaved: boolean;
  postId: number;

  constructor(
    private store: Store<fromAuthorsPostsState.AuthorsPostsState>,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.setPostState();
    this.postBody = this.post.body;
  }

  ngAfterViewInit(): void {
    fromEvent(this.editor.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      switchMap(() =>  this.route.params.pipe(
        map((params) => this.postId = params.id || 0))
      ),
    ).subscribe((postId) => {
      const post: Partial<Post> = { body: this.postBody };
      return this.store.dispatch(
        new fromAuthorsPostsActions.EditPost({ post, postId: this.postId })
      );
      });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  private setPostState() {
    this.postStateSub = this.store.pipe(
      select(fromAuthorsPostsState.viewPostState)
    ).subscribe((postState) => {
      this.isLoading = postState.isLoading;
      this.isSaved = postState.isSaved;
      this.post = postState.post;
    });
  }

  ngOnDestroy(): void {
    this.postStateSub.unsubscribe();
  }
}
