import { Tag, Article, Category } from '../shared/models';

const usedIds = [];

const tags: Tag[] = [];
const articles: Article[] = [];

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
    categories: [ getRandomCategory() ]
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
