import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {  map, mergeMap, take, takeLast, takeUntil, takeWhile, first } from 'rxjs/operators';

import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/shared/models/post.interface';
import { generatePosts } from '../mock-server';
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
     return this.getPostsFromStore().pipe(
        map((posts) => {
          const plucked = this.pluckPost(postId, posts);

          if (!plucked) {
            return { posts, selectedPost: post as Post };
          }

          plucked.title =  post.title ? post.title : plucked.title;
          plucked.body = post.body ? post.body : plucked.body;
          plucked.updatedAt = new Date().toString();


          posts.unshift(plucked);

          return { posts, selectedPost: plucked };
        }),
      );
  }

  editPostTitle(title: string, postId: number) {
      this.getPostsFromStore().pipe(
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
    return of(generatePosts(50));
  }

  getOnePost(postId: number) {
    return this.getPostsFromStore().pipe(
      mergeMap((posts) => {
        const post = posts.find(found => found.id === postId);

        return of(post);
      })
    );
  }

  private pluckPost(postId: number, posts: Post[]): Post {
    const postIndex = posts.findIndex(found => found.id === +postId);
    const [ post ] = posts.splice(postIndex, 1);

    return post;
  }

  private getPostsFromStore() {
    return this.store.pipe(
      select(fromAuthorsPostsState.getPosts),
      take(1)
    );
  }
}
