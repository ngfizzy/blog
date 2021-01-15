import dataApi from '../../data/';

const articlesQueries = {
  getPublishedArticles() {
    return dataApi.getPublishedArticles();
  },
  getOnePublishedArticle(_, { articleId }) {
    return dataApi.getOnePublishedArticle(articleId);
  },
  getFeaturedArticles() {
    return dataApi.getFeaturedArticles();
  },
  getPublishedPoems() {
    return dataApi.getPublishedPoems();
  }
};

export default articlesQueries;
