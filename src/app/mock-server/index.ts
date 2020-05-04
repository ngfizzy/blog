import { Tag, Article, Category, Audience, AudienceActivity } from '../shared/models';

const usedIds = [];

const tags: Tag[] = [];
const articles: Article[] = [];
const audienceList: Audience[] = [];
const categories: Category[] = [
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
    id: 2,
    name: 'self help',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
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

function randomPublishStatus() {
  const randomNumber = Math.floor(Math.random() * 100);

  return randomNumber % 2 === 0;
}
    // tslint:disable:max-line-length

function generateArticle() {
  const id = randomId();
  const article: Article = {
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
    categories: [ getRandomCategory() ],
    audienceActivities: generateRandomAudienceActivities(id)

  };

  return article;
}

function getRandomCategory() {
  const length = categories.length;

  return categories[Math.floor(Math.random() * length)];
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

export function generateArticles(length: number) {
  if (articles.length) {
    return articles;
  }
  while (length > 0) {
    articles.push(generateArticle());
    --length;
  }

  return articles;
}

export function tagArticle(tagName: string, articleId: number): Article {
  const tag =  tags.find(t => t.name === tagName);
  const article = articles.find(p => p.id === articleId);

  if (tag) {
    if (article.tags.find( t => t.name === tagName)) {
      return article;
    }
  }

  const created = createTag(tagName);

  tags.push(created);
  article.tags.push(created);

  return article;
}

export function editArticleTitle(articleId: number, title: string) {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.title = title;
  }

  return article;
}

export function editArticleBody(articleId: number, body: string): Article {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.body = body;
  }

  return article;
}

export function untagArticle(tagId: number, articleId: number): Article {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    const filtered = article.tags.filter(tag => tag.id !== tagId);
    article.tags = filtered;
    article.updatedAt = new Date().toString();
  }

  return article;
}

export function categorizeArticle(articleId: number, categoryName: string) {
  let category = categories.find(c => c.name === categoryName);

  if (!category) {
    category = createCategory(categoryName);
  }

  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.categories.push(category);
  }

  return article;
}

export function removeArticleFromCategory(articleId: number, categoryId: number) {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    const filtered = article.categories.filter(c => c.id !== categoryId);

    article.categories = filtered;
  }

  return article;
}

export function toggleArticlePublishedState(articleId: number) {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.published = !article.published;
  }

  return article;
}

export function getAllArticles() {
  return articles;
}


export function findAudience(options: Partial<Audience>) {
  let audience: Audience = null;

  if (options.id) {
    audience = audienceList.find(aud => aud.id === options.id);
  }

  if (!audience && options.email) {
    audience = audienceList.find(aud => aud.email === options.email);
  } else if (!audience && options.audienceName) {
    audience = audienceList.find(aud => (
        aud.audienceName === options.audienceName &&
          aud.deviceUUID === aud.deviceUUID)
      );
  } else {
    audience = audienceList.find(aud => aud.deviceUUID === options.deviceUUID);
  }

  return audience;
}

function generateRandomAudienceActivities(articleId: number, max = 10): AudienceActivity[] {
  const noOfComments = Math.round(Math.random() * max);

  const seededAudienceNames: Audience[] = [
    { id: 0, audienceName: 'Morgan', deviceUUID: 'aowk' },
    { id: 1, audienceName: 'Jordan', deviceUUID: 'akwox' },
    { id: 2, audienceName: 'John', deviceUUID: 'adkiklals', },
    { id: 3, audienceName: 'Aisha', deviceUUID: '12svfas', },
    { id: 4, audienceName: 'Jen', deviceUUID: 'lliw.zow', },
    { id: 5, audienceName: 'Yung', deviceUUID: 'alilqla.oiaoso', },
    { id: 6, audienceName: 'Wanja', deviceUUID: '.aoioqlaoo.aose' },
  ];

  function fetchRandomAudience(): Audience {
    const index = Math.floor(Math.random() * seededAudienceNames.length);

    return seededAudienceNames[index];
  }

  const activities: AudienceActivity[] = [];

  for (let i = 0; i < noOfComments; i++) {
    const audience = fetchRandomAudience();
    const  applauds = Math.round(Math.random() * 50);

    activities.push({
      audience,
      applauds,
      articleId,
      createdAt: new Date().toString(),
      comments: [{
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate quam. Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae. Sed pretium, ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque lectus libero in mi. Praesent vulputate justo vel libero rutrum, et euismod sem iaculis. Mauris non erat vitae justo congue faucibus nec et leo. Morbi id porta neque. Vestibulum',
        createdAt: new Date().toString()
      },
    ],
    });
  }

  return activities;
}
