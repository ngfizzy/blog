import datastore from './datastore';

class Data {
    dataStore = process.env.APP_ENVIRONMENT === 'PRODUCTION' ? datastore : datastore

  getAllArticles() {
    return this.dataStore.getAllArticles();
  }

  getOneArticle(id) {
    return this.dataStore.getOneArticle(id);
  }

  createArticle(title, body) {
    return this.dataStore.createArticle(title, body);
  }

  deleteArticle(articleId) {
    return this.dataStore.deleteArticle(articleId);
  }

  editArticleTitle(articleId, title) {
    return this.dataStore.editArticleTitle(articleId, title);
  }

  editArticleBody(articleId, body) {
    return this.dataStore.editArticleBody(articleId, body);
  }

  tagArticle(articleId, tagName) {
    return this.dataStore.tagArticle(articleId, tagName);
  }

  addThemeImage(articleId, themeImageUrl) {
    return this.dataStore.addThemeImage(articleId, themeImageUrl);
  }

  untagArticle(articleId, tagId) {
    return this.dataStore.untagArticle(articleId, tagId);
  }

  categorizeArticle(articleId, categoryName) {
    return this.dataStore.categorizeArticle(articleId, categoryName);
  }

  removeArticleFromCategory(articleId, categoryId) {
    return this.dataStore.removeArticleFromCategory(articleId, categoryId);
  }

  toggleArticlePublishedState(articleId) {
    return this.dataStore.toggleArticlePublishedState(articleId);
  }

  toggleCommentDelete(commentId) {
    return this.dataStore.toggleCommentDelete(commentId);
  }

  getLast10Drafts() {
    return this.dataStore.getLast10Drafts();
  }

  getFeaturedArticles() {
    return this.dataStore.getFeaturedArticles();
  }

  getTop10Articles() {
    return this.dataStore.getTop10Articles();
  }

  getDashboardStatistics() {
    return this.dataStore.getDashboardStatistics();
  }

  getCategoriesSummaries() {
    return this.dataStore.getCategoriesSummaries();
  }

  createCategory(categoryName) {
    return this.dataStore.createCategory(categoryName);
  }

  getPublishedArticles() {
    return this.dataStore.getPublishedArticles();
  }

  getPublishedPoems() {
    return this.dataStore.getPublishedPoems();
  }

  applaud(payload) {
    return this.dataStore.applaud(payload);
  }

  addComment(payload) {
    return this.dataStore.addComment(payload);
  }

  getOnePublishedArticle(articleId) {
    return this.dataStore.getOnePublishedArticle(articleId);
  }

  findAudience(audience) {
    return this.dataStore.findAudience(audience);
  }

  sendMessage(audience, message) {
    return this.dataStore.sendMessage(audience, message);
  }

  getMessages() {
    return this.dataStore.getMessages();
  }

  login(username, password) {
    return this.dataStore.login(username, password);
  }

  logout(authToken?: string) {
    return this.dataStore.logout(authToken);
  }
}

export default  new Data();
