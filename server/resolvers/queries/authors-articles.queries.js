const dataApi = require('../../data');

const authorsArticlesQueries = {
  getAllArticles() {
    return dataApi.getAllArticles()
  },
  getOneArticle(authorId) {
    return dataApi.getOneArticle(authorId);
  },
  getLast10Drafts() {
    return  dataApi.getLast10Drafts();
  }
};

module.exports = authorsArticlesQueries;