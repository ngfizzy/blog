import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { switchMap, map, mergeMap, take } from 'rxjs/operators';

import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/shared/models/post.interface';
import * as fromAuthorsPostsState from './authors-posts/state';

@Injectable()
export class AuthorsPostsService {
  posts: Post[];

  constructor(
    private postsService: PostsService,
    private store: Store<fromAuthorsPostsState.AuthorsPostsState>,
  ) {
    this.postsService.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  createPost(post: Partial<Post>): Observable<Post> {
    const createdPost = {
      ...post,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    } as Post;

    return of(createdPost);
  }

  editPostTitle(title: string, postId: number) {
    return this.store.pipe(
      select(fromAuthorsPostsState.getPosts),
      take(1),
      mergeMap((posts) => {
        const postsDup = [ ...posts ];
        const [ post ] = postsDup.splice(postId, 1);

        if (post) {
          post.title = title;
        }

        postsDup.unshift(post);

        return of({ posts: postsDup, selectedPost: post });
      })
    );
  }

  getAllPosts() {
    return this.postsService.getAll();
  }

  getOnePost(postId = 1) {
    return this.store.pipe(
      select(fromAuthorsPostsState.getPosts),
      take(1),
      mergeMap((posts) => {
        const post = posts[postId];

        return of(post);
      })
    );
  }
}
