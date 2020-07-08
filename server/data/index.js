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

  editArticleTitle(articleId, title) {
    return this.dataStore.editArticleTitle(articleId, title)
  }

}

module.exports = new Data();
