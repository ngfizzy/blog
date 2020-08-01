const dataApi = require('../../data/');

const articlesQueries = {
  getPublishedArticles() {
    return dataApi.getPublishedArticles();
  },
  getOnePublishedArticle(_, { articleId }) {
    return dataApi.getOnePublishedArticle(articleId);
  }
};

module.exports = articlesQueries;
