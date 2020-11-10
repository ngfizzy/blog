const dataApi = require('../../data');
const { withAuth } = require('../../utils');

const authorsArticlesMutations = {
  createArticle(_, { title, body}, { auth }) {
    return withAuth(
      auth,
      () => dataApi.createArticle(title, body)
    );
  },
  editArticleTitle(_, { articleId, value }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.editArticleTitle(articleId, value)
    );
  },
  deleteArticle(_, { articleId }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.deleteArticle(articleId),
    );
  },
  editArticleBody(_, { articleId, value}, { auth }) {
    return withAuth(
      auth,
      () => dataApi.editArticleBody(articleId, value)
    );
  },
  tagArticle(_, {articleId, tagName}, { auth }) {
    return withAuth(
      auth,
      () => dataApi.tagArticle(articleId, tagName)
    );
  },
  addThemeImage(_, { articleId, themeImageUrl }, { auth}) {
    return withAuth(
      auth,
      () => dataApi.addThemeImage(articleId, themeImageUrl)
    );
  },
  untagArticle(_, {articleId, tagId}, { auth }) {
    return withAuth(
      auth,
      () => dataApi.untagArticle(articleId, tagId)
    );
  },
  categorizeArticle(_, { articleId, categoryName }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.categorizeArticle(articleId, categoryName)
    );
  },
  removeArticleFromCategory(_, { articleId, categoryId}, { auth }) {
    return withAuth(
      auth,
      () => dataApi.removeArticleFromCategory(articleId, categoryId)
    );
  },
  toggleArticlePublishedState(_, { articleId }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.toggleArticlePublishedState(articleId)
    );
  }
};

module.exports = authorsArticlesMutations;
