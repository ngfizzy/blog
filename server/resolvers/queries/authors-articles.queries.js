const dataApi = require('../../data');
const {withAuth} = require('../../utils');


const authorsArticlesQueries = {
  getAllArticles(_, __, { auth }) {
    return withAuth(auth, () => dataApi.getAllArticles());
  },
  getOneArticle(_, {authorId}, { auth }) {
    return withAuth(
      auth,
      dataApi.getOneArticle(authorId)
    );
  },
  getLast10Drafts(_, __, { auth }) {
    return withAuth(auth, () => dataApi.getLast10Drafts());
  },
  getTop10Articles(_, __, { auth}) {
    return withAuth(auth, () => dataApi.getTop10Articles());
  },
  getDashboardStatistics(_, __, { auth }) {
    return withAuth(
      auth,
      () => dataApi.getDashboardStatistics()
    );
  },
  getCategoriesSummaries(_, __, { auth }) {
    return withAuth(
      auth,
      () => dataApi.getCategoriesSummaries()
    );
  }
};

module.exports = authorsArticlesQueries;
