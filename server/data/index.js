const datastore = require('./datastore');

class Data {
  constructor() {
    this.dataStore = datastore;
  }

  getAllArticles() {
    return this.dataStore.getAllArticles();
  }

  getOneArticle(id) {
    return this.dataStore.getOneArticle(id);
  }

  createArticle(title, body) {
    return this.dataStore.createArticle(title, body);
  }

  deleteArticle(articleId) {
    return this.dataStore.deleteArticle(articleId);
  }

  editArticleTitle(articleId, title) {
    return this.dataStore.editArticleTitle(articleId, title);
  }

  editArticleBody(articleId, body) {
    return this.dataStore.editArticleBody(articleId, body);
  }

  tagArticle(articleId, tagName) {
    return this.dataStore.tagArticle(articleId, tagName);
  }

  untagArticle(articleId, tagId) {
    return this.dataStore.untagArticle(articleId, tagId);
  }

  categorizeArticle(articleId, categoryName) {
    return this.dataStore.categorizeArticle(articleId, categoryName);
  }

  removeArticleFromCategory(articleId, categoryId) {
    return this.dataStore.removeArticleFromCategory(articleId, categoryId);
  }

  toggleArticlePublishedState(articleId) {
    return this.dataStore.toggleArticlePublishedState(articleId);
  }

  getLast10Drafts() {
    return this.dataStore.getLast10Drafts();
  }

  getTop10Articles() {
    return this.dataStore.getTop10Articles();
  }

  getDashboardStatistics() {
    return this.dataStore.getDashboardStatistics();
  }

  getCategoriesSummaries() {
    return this.dataStore.getCategoriesSummaries();
  }

  createCategory(categoryName) {
    return this.dataStore.createCategory(categoryName);
  }

  getPublishedArticles() {
    return this.dataStore.getPublishedArticles();
  }
}

module.exports = new Data();
