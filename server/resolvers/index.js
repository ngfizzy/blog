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
    createArticle(_, { title, body}) {
      return dataApi.createArticle(title, body);
    },
    editArticleTitle(_, { articleId, value }) {
      return dataApi.editArticleTitle(articleId, value);
    },
    editArticleBody(_, { articleId, value}) {
      return dataApi.editArticleBody(articleId, value);
    },
    tagArticle(_, {articleId, tagName}) {
      return dataApi.tagArticle(articleId, tagName);

    },
    untagArticle(_, {articleId, tagId}) {
      return dataApi.untagArticle(articleId, tagId);
    }
  }
};

module.exports = resolvers;
