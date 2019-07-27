import { Post } from '../models/post.interface';
import { createFeatureSelector } from '@ngrx/store';

export interface PostsState {
  posts: Post[];
}
