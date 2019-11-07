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

  editPost(post: Partial<Post>, postId: number):
    Observable<{ posts: Post[]; selectedPost: Post }> {
     return this.getPostsFromStore(postId).pipe(
        map((posts) => {
          const plucked = this.pluckPost(postId, posts);

          if (!plucked) {
            return { posts, selectedPost: post as Post };
          }

          plucked.title =  post.title ? post.title : plucked.title;
          plucked.body = post.body ? post.body : plucked.body;

          posts.unshift(plucked);

          return { posts, selectedPost: plucked as Post };
        }),
      );
  }

  editPostTitle(title: string, postId: number) {
      this.getPostsFromStore(postId).pipe(
        map((posts) => {
          const post = this.pluckPost(postId, posts);

          if (post) {
            post.title = title;
          }

          posts.unshift(post);

          return { posts, selectedPost: post };
        })
      );
  }

  getAllPosts() {
    return this.postsService.getAll();
  }

  getOnePost(postId = 1) {
    return this.getPostsFromStore(postId).pipe(
      mergeMap((posts) => {
        const post = posts[postId];

        return of(post);
      })
    );
  }

  private pluckPost(postId: number, posts: Post[]): Post {
    const [ post ] = posts.splice(postId, 1);

    return post;
  }

  private getPostsFromStore(postId: number) {
    return this.store.pipe(
      select(fromAuthorsPostsState.getPosts),
      take(1),
    );
  }
}
