import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/core/posts.service';
import { Post } from 'src/app/shared/models/post.interface';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthorsPostsService {
  posts: Post[];

  constructor(private postsService: PostsService) {
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

  getAllPosts() {
    return this.postsService.getAll();
  }

  getOnePost(postId = 1) {
    return this.postsService.getOne(postId);
  }
}
