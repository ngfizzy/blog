
const articles = [];
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

const audienceList = [];
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

const generators = {
  randomId() {
    let randomNumber = Math.floor(Math.random() * 1000);

    while (usedIds.indexOf(randomNumber) > -1) {
      randomNumber = Math.floor(Math.random() * 10000);
    }

    usedIds.push(randomNumber);

    return randomNumber;
  },
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

      const activityId = !audienceActivities.length
        ? 0
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
    const commentId = !audienceComments.length
      ? 0
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
    }
  }
};

generators.generateArticles(200);


module.exports = {
  getAllArticles() {
    return articles.sort((a, b) => {
      const aDate = new Date(a.updatedAt);
      const bDate = new Date(b.updatedAt);

      if(a.updatedAt > b.updatedAt) {
        return -1;
      }

      return 1;
    })
  },
  getOneArticle(articleId) {
    return articles.find(
      found => articleId === found
    );
  },
  editArticleTitle(articleId, title) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      article.title = title;
    }

    return {article};
  },
  createArticle(title, body) {
    const id = generators.randomId();
    const article = {
      id,
      title,
      body,
      authorId: 1,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      categories: [],
      tags: [],
      audienceActivities: [],
      published: false,
    };

    articles.push(article);

    return {article};
  },
  deleteArticle(articleId) {
    const index = articles.findIndex(a => a.id === articleId);
    let error = null;

    if (index > -1) {
      articles.splice(index, 1);
    } else {
      error = 'Article not found';
    }

    return { articles, error };
  },
  editArticleBody(articleId, body) {
    const article = articles.find(p => p.id === articleId);

    if(article) {
      article.body = body;
      article.updatedAt = new Date().toString();
    }

    return {article};
  },
  tagArticle(articleId, tagName) {
    const tag = tags.find(t => t.name === tagName);
    const article = articles.find(p => p.id === articleId);

    if (tag) {
      if (article.tags.find(t => t.name === tagName)) {
        return article;
      }
    }


    const created = generators.createTag(tagName);

    tags.push(created);
    article.tags.push(created);
    article.updatedAt = new Date().toString();

    return {article};
  },
  untagArticle(articleId, tagId) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      const filtered = article.tags.filter(tag => tag.id !== tagId);
      article.tags = filtered;
      article.updatedAt = new Date().toString();
    }

    return {article};
  },
  categorizeArticle(articleId, categoryName) {
    let category = categories.find(c => c.name === categoryName);

    if (!category) {
      const { createdCategory } = this.createCategory(categoryName);
      category = createdCategory;
    }

    const article = articles.find(p => p.id === articleId);

    if (article) {
      article.categories.push(category);
    }

    return {article};
  },
  createCategory(name) {
    const createdAt = new Date().toString();
    const category = {
      name,
      createdAt,
      id: generators.randomId(),
      updatedAt: createdAt,
    };

    categories.push(category);

    return {
      categories,
      categoriesSummaries: this.getCategoriesSummaries(),
      createdCategory: category,
    };
  },
  getCategoriesSummaries() {
    return categories.map(category => this.getCategorySummary(category.id));
  },
  getCategorySummary(categoryId) {
    const categoryArticles = this.getCategoryArticles(categoryId);

    return {
      categoryId,
      articlesCount: categoryArticles.length,
      categoryName: categories.find(category => category.id === categoryId).name,
    };
  },
  getCategoryArticles(categoryId) {
    return articles.filter(article => {
      const inCategory = !!article.categories.find(
        category => category.id === categoryId,
      );

      return inCategory;
    });
  },
  removeArticleFromCategory(articleId, categoryId) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      const filtered = article.categories.filter(c => c.id !== categoryId);

      article.categories = filtered;
    }

    return {article};
  },
  toggleArticlePublishedState(articleId) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      article.published = !article.published;
      article.updatedAt = new Date().toString();
      article.publishedAt = article.published ?
        article.updatedAt : article.publishedAt
      article.unpublishedAt = !article.published ?
        article.updatedAt : article.unpublishedAt;
    }

    return { article };
  }
}
