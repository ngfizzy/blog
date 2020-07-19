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
    deleteArticle(_, { articleId }) {
      return dataApi.deleteArticle(articleId);
    },
    editArticleBody(_, { articleId, value}) {
      return dataApi.editArticleBody(articleId, value);
    },
    tagArticle(_, {articleId, tagName}) {
      return dataApi.tagArticle(articleId, tagName);
    },
    untagArticle(_, {articleId, tagId}) {
      return dataApi.untagArticle(articleId, tagId);
    },
    categorizeArticle(_, { articleId, categoryName }) {
      return dataApi.categorizeArticle(articleId, categoryName);
    },
    removeArticleFromCategory(_, { articleId, categoryId}) {
      return dataApi.removeArticleFromCategory(_, { articleId, categoryId});
    }
  }
};

module.exports = resolvers;
