const authorsArticlesMutations = require('./authors-articles.mutations');
const dashboardMutations = require('./dashboard.mutation');

module.exports = {
  ...authorsArticlesMutations,
  ...dashboardMutations
};
