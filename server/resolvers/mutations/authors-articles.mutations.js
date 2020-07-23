const dataApi = require('../../data');

const authorsArticlesMutations = {
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
  },
  toggleArticlePublishedState(_, { articleId }) {
    return dataApi.toggleArticlePublishedState(articleId);
  }
}

module.exports = authorsArticlesMutations;
