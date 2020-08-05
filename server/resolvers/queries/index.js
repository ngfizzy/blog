const authorsArticlesQueries = require('./authors-articles.queries');
const articlesQueries = require('./articles.queries');
const audienceQueries = require('./audience-queries');

module.exports = {
  ...authorsArticlesQueries,
  ...articlesQueries,
  ...audienceQueries
};
