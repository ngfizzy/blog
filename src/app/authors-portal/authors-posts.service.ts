import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {  map, mergeMap, take } from 'rxjs/operators';

import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/shared/models/post.interface';
import { generatePosts, tagPost, untagPost, categorizePost, removePostFromCategory, editPostBody, editPostTitle } from '../mock-server';
import * as fromAuthorsPostsState from './authors-posts/state';
import { UnknownObjectPath } from '../shared/Exceptions';

const enum EditablePostPaths {
  Title = 'title',
  Body = 'body',
  Tags = 'tags',
  Categories = 'categories'
}

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

  editPostTitle(title: string, postId: number):
    Observable<{ posts: Post[]; selectedPost: Post }> {
      return this.editPostPath(postId, EditablePostPaths.Title, title);
  }

  editPostBody(body: string, postId: number) {
   return this.editPostPath(postId, EditablePostPaths.Body, body);
  }

  tagPost(tag: string, postId: number) {
    return this.editPostPath(postId, EditablePostPaths.Tags, tag);
  }

  untagPost(tagId: number, postId: number) {
    return this.editPostPath(postId, EditablePostPaths.Tags, tagId);
  }

  categorizePost(postId: number, categoryName: string) {
    return this.editPostPath(postId, EditablePostPaths.Categories, categoryName);
  }

  removePostFromCategory(postId: number, categoryId: number) {
    return this.editPostPath(postId, EditablePostPaths.Categories, categoryId);
  }

  private editPostPath(postId: number, path: EditablePostPaths, newPathValue: any) {
    return this.pluckPostFromStore(postId).pipe(
      map((pluckResult) => {
        const { posts , plucked} = pluckResult;
        let post = plucked;

        if (!post) {
          return { posts, selectedPost: plucked };
        }

        switch (path) {
          case EditablePostPaths.Body:
            post = editPostBody(postId, newPathValue);
            break;
          case EditablePostPaths.Title:
            post = editPostTitle(postId, newPathValue);
            break;
          case EditablePostPaths.Tags:
            post = typeof(newPathValue) === 'string' ?
              tagPost(newPathValue, postId) : untagPost(newPathValue, postId);
            break;
          case EditablePostPaths.Categories:
            post = typeof(newPathValue) === 'string' ?
              categorizePost(postId, newPathValue) : removePostFromCategory(postId, newPathValue);
            break;
          default:
            const message = `Cannot update property ${path} because it doesnt exist`;
            throw new UnknownObjectPath(path, message);

        }


        posts.unshift(plucked);

        return { posts, selectedPost: plucked };
      }),
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

  private pluckPostFromStore(postId: number) {
    return this.getPostsFromStore().pipe(
      map((posts) => {
        const plucked = this.pluckPost(postId, posts);
        return { posts, plucked };
      }),
    );
  }
}
