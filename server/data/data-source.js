
const audienceActivities = [];
const audienceComments = [];
const audienceRecord = [
  { id: 0, audienceName: 'Morgan', deviceUUID: 'aowk' },
  { id: 1, audienceName: 'Jordan', deviceUUID: 'akwox' },
  { id: 2, audienceName: 'John', deviceUUID: 'adkiklals' },
  { id: 3, audienceName: 'Aisha', deviceUUID: '12svfas' },
  { id: 4, audienceName: 'Jen', deviceUUID: 'lliw.zow' },
  { id: 5, audienceName: 'Yung', deviceUUID: 'alilqla.oiaoso' },
  { id: 6, audienceName: 'Wanja', deviceUUID: '.aoioqlaoo.aose' },
];

const authToken = 'test-token';

const author = {
  id: 1,
  username: 'fizzy',
  password: 'yzzif'
};

const categories = [
  {
    id: 1,
    name: 'poetry',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
  {
    id: 2,
    name: 'tech',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
  {
    id: 3,
    name: 'self help',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
];
const usedIds = [];
const tags = [];
const messages = [];
const articles = [
  {
    id: randomId(),
    authorId: 1,
    title: 'Unique Article',
    body:
      `Lorem ipsum dolor sit amet,` +
      `  consectetur adipiscing elit.Duis sit amet vulputate quam.Pellentesque` +
      `porta sollicitudin dui, in tincidunt metus tempor vitae.Sed pretium,` +
      `<h5>Test Subheading</h5>` +
      `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
      `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod` +
      `sem iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id` +
      `porta neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien` +
      `leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at` +
      `finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
      `<br/>
  <br/>
  <br/>`,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    published: true,
    categories: [
      {
        id: 2,
        name: 'tech',
        updatedAt: new Date().toString(),
        createdAt: new Date().toString(),
      },
    ],
    tags: [],
    audienceActivities: []
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'Search Subject 1',
    body:
      `Lorem ipsum dolor sit amet,` +
      `<script>alert('if this shows the app is vulnerable to xss')</script>` +
      `  consectetur adipiscing elit.Duis sit amet vulputate quam.Pellentesque` +
      `porta sollicitudin dui, in tincidunt metus tempor vitae.Sed pretium,` +
      `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
      `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod` +
      `sem iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id` +
      `porta neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien` +
      `leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at` +
      `finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
      `<br/>
  <br/>
  <br/>`,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    published: true,
    categories: [
      {
        id: 2,
        name: 'tech',
        updatedAt: new Date().toString(),
        createdAt: new Date().toString(),
      },
    ],
    tags: [],
    audienceActivities: []
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'Search Subject 2',
    body:
      `Lorem ipsum dolor sit amet,` +
      `  consectetur adipiscing elit.Duis sit amet vulputate quam.Pellentesque` +
      `porta sollicitudin dui, in tincidunt metus tempor vitae.Sed pretium,` +
      `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
      `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod` +
      `sem iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id` +
      `porta neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien` +
      `leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at` +
      `finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
      `<br/>
  <br/>
  <br/>`,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    published: true,
    categories: [
      {
        id: 2,
        name: 'tech',
        updatedAt: new Date().toString(),
        createdAt: new Date().toString(),
      },
    ],
    tags: [],
    audienceActivities: []
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'Search Subject 3',
    body:
      `Lorem ipsum dolor sit amet,` +
      `  consectetur adipiscing elit.Duis sit amet vulputate quam.Pellentesque` +
      `porta sollicitudin dui, in tincidunt metus tempor vitae.Sed pretium,` +
      `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
      `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod` +
      `sem iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id` +
      `porta neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien` +
      `leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at` +
      `finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
      `<br/>
  <br/>
  <br/>`,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    published: true,
    categories: [
      {
        id: 2,
        name: 'tech',
        updatedAt: new Date().toString(),
        createdAt: new Date().toString(),
      },
    ],
    tags: [],
    audienceActivities: []
  },
];

function randomId() {
  let randomNumber = Math.floor(Math.random() * 1000);

  while (usedIds.indexOf(randomNumber) > -1) {
    randomNumber = Math.floor(Math.random() * 10000);
  }

  usedIds.push(randomNumber);

  return randomNumber;
}

const generators = {
  randomId,
  generateArticles(length) {
    if (articles.length > 5) {
      return articles;
    }

    while (length > 0) {
      articles.push(this.generateArticle());
      --length;
    }

    return articles;
  },
  randomPublishStatus() {
    const randomNumber = Math.floor(Math.random() * 100);

    return randomNumber % 2 === 0;
  },

  generateArticle() {
    const id = this.randomId();
    const isPublished = this.randomPublishStatus();
    const article = {
      id,
      authorId: 1,
      published: isPublished,
      publishedAt: isPublished ? new Date().toString() : null,
      title: 'Lorem ipsum ' + id,
      body:
        `Lorem ipsum dolor sit amet,` +
        `consectetur adipiscing elit.Duis sit amet vulputate quam.Pellentesque` +
        `porta sollicitudin dui, in tincidunt metus tempor vitae.Sed pretium,` +
        `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
        `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod` +
        `sem iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id` +
        `porta neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien` +
        `leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at` +
        `finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
        `<br/>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate` +
        `quam. Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae. Sed pretium,` +
        `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque lectus libero in mi.` +
        `  Praesent vulputate justo vel libero rutrum, et euismod sem iaculis.Mauris non erat vitae justo` +
        `congue faucibus nec et leo.Morbi id porta neque.Vestibulum laoreet volutpat risus non hendrerit.` +
        `Vestibulum sapien leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas` +
        `at finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
        `<br/>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate` +
        `quam.Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae.Sed` +
        `pretium, ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
        `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod sem` +
        `iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id porta` +
        `neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien leo,` +
        `varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at finibus` +
        `augue, eget feugiat odio.Ut vel ultricies ipsum.`,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      tags: [],
      categories: [this.getRandomCategory()],
      audienceActivities: isPublished ? this.generateRandomAudienceActivities(id) : [],
    };

    return article;
  },

  getRandomCategory() {
    const length = categories.length;

    return categories[Math.floor(Math.random() * length)];
  },

  generateRandomAudienceActivities(
    articleId,
    max = 10
  ) {
    const noOfComments = Math.round(Math.random() * max);

    function fetchRandomAudience() {
      const index = Math.floor(Math.random() * audienceRecord.length);

      return audienceRecord[index];
    }

    const articleActivities = [];

    for (let i = 0; i < noOfComments; i++) {
      const audience = fetchRandomAudience();
      const applauds = Math.round(Math.random() * 50);

      const activityId = !audienceActivities.length ? 0
        : audienceActivities[audienceActivities.length - 1].id + 1;

      const activity = {
        id: activityId,
        audience,
        applauds,
        articleId,
        createdAt: new Date().toString(),
        comments: [this.generateComment(articleId, audience.id)],
      };

      audienceActivities.push(activity);
      articleActivities.push(activity);
    }

    return articleActivities;
  },
  generateComment(articleId, audienceId) {
    const comment =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
      ' Duis sit amet vulputate quam. Pellentesque porta sollicitudin dui, ' +
      'in tincidunt metus tempor vitae. Sed pretium, ipsum nec gravida ' +
      'consectetur, sapien arcu bibendum orci, ac pellentesque lectus ' +
      'libero in mi. Praesent vulputate justo vel libero rutrum, et euismod ' +
      'sem iaculis. Mauris non erat vitae justo congue faucibus nec et leo. ' +
      'Morbi id porta neque. Vestibulum';

    return this.createComment(comment, articleId, audienceId);
  },

  createComment(
    comment,
    articleId,
    audienceId,
  ) {
    const commentId = !audienceComments.length ? 0
      : audienceComments[audienceComments.length - 1].id + 1;

    const comm = {
      articleId,
      audienceId,
      comment,
      id: commentId,
      createdAt: new Date().toString(),
    };

    audienceComments.push(comm);

    return comm;
  },
  createTag(tagName) {
    const createdAt = new Date().toString();

    return {
      name: tagName,
      id: this.randomId(),
      createdAt,
      updatedAt: createdAt,
    };
  },

};

module.exports = {
  articles,
  audienceActivities,
  audienceComments,
  audienceRecord,
  categories,
  tags,
  generators,
  messages,
  authToken,
  author
};
