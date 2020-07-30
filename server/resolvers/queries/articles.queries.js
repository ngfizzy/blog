const dataApi = require('../../data/');

const authorsArticlesQueries = {
  getPublishedArticles() {
    return dataApi.getPublishedArticles();
  }
};

module.exports = authorsArticlesQueries;
