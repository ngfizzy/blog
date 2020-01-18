import { Post } from '../shared/models';

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


export function generatePosts(length: number) {
  const posts = [];
  while (length > 0) {
    posts.push(generatePost());
    --length;
  }

  return posts;
}
