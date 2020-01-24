import { Tag, Post, Category } from '../shared/models';

const usedIds = [];

const tags: Tag[] = [];
const posts: Post[] = [];
const categories: Category[] = [];


function randomId() {
  let randomNumber = Math.floor(Math.random() * 1000);

  while (usedIds.indexOf(randomNumber) > -1) {
    randomNumber = Math.floor(Math.random() * 10000);
  }

  usedIds.push(randomNumber);

  return randomNumber;
}

function randomPublishStatus() {
  const randomNumber = Math.floor(Math.random() * 100);

  return randomNumber % 2 === 0;
}
    // tslint:disable:max-line-length

function generatePost() {
  const id = randomId();
  const post: Post = {
    id,
    authorId: 1,
    published: randomPublishStatus(),
    title: 'Lorem ipsum' + id,
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

function createTag(tagName: string): Tag {
  const createdAt = new Date().toString();
  return {
    name: tagName,
    id: randomId(),
    createdAt,
    updatedAt: createdAt,
  };
}

function createCategory(name: string): Category {
  const createdAt = new Date().toString();
  const category = {
    name,
    createdAt,
    id: randomId(),
    updatedAt: createdAt,
  };

  categories.push(category);

  return category;
}

export function generatePosts(length: number) {
  if (posts.length) {
    return posts;
  }
  while (length > 0) {
    posts.push(generatePost());
    --length;
  }

  return posts;
}

export function tagPost(tagName: string, postId: number): Post {
  const tag =  tags.find(t => t.name === tagName);
  const post = posts.find(p => p.id === postId);

  if (tag) {
    if (post.tags.find( t => t.name === tagName)) {
      return post;
    }
  }

  const created = createTag(tagName);

  tags.push(created);
  post.tags.push(created);

  return post;
}

export function editPostTitle(postId: number, title: string) {
  const post = posts.find(p => p.id === postId);

  if (post) {
    post.title = title;
  }

  return post;
}

export function editPostBody(postId: number, body: string): Post {
  const post = posts.find(p => p.id === postId);

  if (post) {
    post.body = body;
  }

  return post;
}

export function untagPost(tagId: number, postId: number): Post {
  const post = posts.find(p => p.id === postId);

  if (post) {
    const filtered = post.tags.filter(tag => tag.id !== tagId);
    post.tags = filtered;
    post.updatedAt = new Date().toString();
  }

  return post;
}

export function categorizePost(postId: number, categoryName: string) {
  let category = categories.find(c => c.name === categoryName);

  if (!category) {
    category = createCategory(categoryName);
  }

  const post = posts.find(p => p.id === postId);

  if (post) {
    post.categories.push(category);
  }

  return post;
}

export function removePostFromCategory(postId: number, categoryId: number) {
  const post = posts.find(p => p.id === postId);

  if (post) {
    const filtered = post.categories.filter(c => c.id !== categoryId);

    post.categories = filtered;
  }

  return post;
}
