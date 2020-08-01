const dataApi = require('../../data/');

const articlesQueries = {
  getPublishedArticles() {
    return dataApi.getPublishedArticles();
  },
  getOnePublishedArticle(_, { articleId }) {
    return dataApi.getPublishedArticles(articleId);
  }
};

module.exports = articlesQueries;
