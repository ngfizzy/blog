const dataApi = require('../data');

const resolvers = {
  Query: {
    articles() {
      return dataApi.getAllArticles()
    },
    article(authorId) {
      return dataApi.getOneArticle(authorId);
    }
  }
};

module.exports = resolvers;
