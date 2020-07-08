const dataApi = require('../data');

const resolvers = {
  Query: {
    articles() {
      return dataApi.getAllArticles()
    },
    article(authorId) {
      return dataApi.getOneArticle(authorId);
    }
  },
  Mutation: {
    editArticleTitle(_, { articleId, value }) {
      return dataApi.editArticleTitle(articleId, value);
    },
    editArticleBody(_, { articleId, value}) {
      return dataApi.editArticleBody(articleId, value);
    }
  }
};

module.exports = resolvers;
