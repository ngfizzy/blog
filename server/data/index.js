const datastore = require('../datastore');

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
}

module.exports = new Data();
