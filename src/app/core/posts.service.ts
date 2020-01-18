import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Post } from '../shared/models/post.interface';
import { generatePosts } from '../mock-server';

  // tslint:disable:max-line-length

@Injectable({providedIn: 'root'})
export class PostsService {
  posts: Post[];

  constructor() {
    this.posts = generatePosts(50);
  }

  getAll(): Observable<Post[]> {
    return of(this.posts.filter(found => found.published === true));
  }

  getOne(postId: number): Observable<Post> {
    const post = this.posts.find((found) =>
      postId === found.id &&
      found.published === true
    );

    return of(post);
  }
}
