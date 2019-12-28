import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Post } from '../shared/models/post.interface';

  // tslint:disable:max-line-length
const usedIds = [];
function randomId() {
  let randomNumber = Math.floor(Math.random() * 1000);

  while (usedIds.indexOf(randomNumber) > -1) {
    randomNumber = Math.floor(Math.random() * 1000);
  }

  usedIds.push(randomNumber);

  return randomNumber;
}

function randomPublishStatus() {
  const randomNumber = Math.floor(Math.random() * 100);

  return randomNumber % 2 === 0;
}

function generatePost() {
  const post: Post = {
    id: randomId(),
    authorId: 1,
    published: randomPublishStatus(),
    title: 'Lorem ipsum',
    body:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate quam. Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae. Sed pretium, ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque lectus libero in mi. Praesent vulputate justo vel libero rutrum, et euismod sem iaculis. Mauris non erat vitae justo congue faucibus nec et leo. Morbi id porta neque. Vestibulum laoreet volutpat risus non hendrerit. Vestibulum sapien leo, varius quis finibus nec, iaculis eget lorem. In nec ex elit. Maecenas at finibus augue, eget feugiat odio. Ut vel ultricies ipsum.
    <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate quam. Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae. Sed pretium, ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque lectus libero in mi. Praesent vulputate justo vel libero rutrum, et euismod sem iaculis. Mauris non erat vitae justo congue faucibus nec et leo. Morbi id porta neque. Vestibulum laoreet volutpat risus non hendrerit. Vestibulum sapien leo, varius quis finibus nec, iaculis eget lorem. In nec ex elit. Maecenas at finibus augue, eget feugiat odio. Ut vel ultricies ipsum.
    <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate quam. Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae. Sed pretium, ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque lectus libero in mi. Praesent vulputate justo vel libero rutrum, et euismod sem iaculis. Mauris non erat vitae justo congue faucibus nec et leo. Morbi id porta neque. Vestibulum laoreet volutpat risus non hendrerit. Vestibulum sapien leo, varius quis finibus nec, iaculis eget lorem. In nec ex elit. Maecenas at finibus augue, eget feugiat odio. Ut vel ultricies ipsum.
  `,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    tags: [],
    categories: []
  };

  return post;
}


function generatePosts(length: number) {
  const posts = [];
  while (length > 0) {
    posts.push(generatePost());
  }

  return posts;
}
@Injectable({providedIn: 'root'})
export class PostsService {
  posts: Post[];

  constructor() {
    this.posts = generatePosts(50);
    console.log('possible ids........................', usedIds);
  }

  getAll(): Observable<Post[]> {
    return of(this.posts);
  }

  getOne(postId: number): Observable<Post> {
    const post = this.posts.find((p) => postId === p.id);

    return of(post);
  }
}
