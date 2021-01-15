import dataApi from '../../data';
import utils from '../../utils';


const authorsArticlesQueries = {
  getAllArticles(_, __, { auth }) {
    return utils.withAuth(auth, () => dataApi.getAllArticles());
  },
  getOneArticle(_, {authorId}, { auth }) {
    return utils.withAuth(
      auth,
      dataApi.getOneArticle(authorId)
    );
  },
  getLast10Drafts(_, __, { auth }) {
    return utils.withAuth(auth, () => dataApi.getLast10Drafts());
  },
  getTop10Articles(_, __, { auth}) {
    return utils.withAuth(auth, () => dataApi.getTop10Articles());
  },
  getDashboardStatistics(_, __, { auth }) {
    return utils.withAuth(
      auth,
      () => dataApi.getDashboardStatistics()
    );
  },
  getCategoriesSummaries(_, __, { auth }) {
    return utils.withAuth(
      auth,
      () => dataApi.getCategoriesSummaries()
    );
  }
};

export default authorsArticlesQueries;
