const datastore = require('./datastore');

class Data {
  constructor() {
    this.dataStore = datastore;
  }

  getAllArticles() {
    return this.dataStore.getAllArticles()
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
    return this.dataStore.editArticleTitle(articleId, title)
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
}

module.exports = new Data();