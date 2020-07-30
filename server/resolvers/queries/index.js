const authorsArticlesQueries = require('./authors-articles.queries');
const articlesQueries = require('./articles.queries');

module.exports = {
  ...authorsArticlesQueries,
  ...articlesQueries
};
