const dataApi = require('../../data');

const authorsArticlesQueries = {
  getAllArticles() {
    return dataApi.getAllArticles();
  },
  getOneArticle(authorId) {
    return dataApi.getOneArticle(authorId);
  },
  getLast10Drafts() {
    return dataApi.getLast10Drafts();
  },
  getTop10Articles() {
    return dataApi.getTop10Articles();
  },
  getDashboardStatistics() {
    return dataApi.getDashboardStatistics();
  },
  getCategoriesSummaries() {
    return dataApi.getCategoriesSummaries();
  }
};

module.exports = authorsArticlesQueries;
