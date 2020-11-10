const authorsArticlesMutations = require('./authors-articles.mutations');
const dashboardMutations = require('./dashboard.mutation');
const audienceActivitiesMutations = require('./audience-activities.mutation');
const authMutations = require('./auth.mutation');

module.exports = {
  ...authMutations,
  ...authorsArticlesMutations,
  ...dashboardMutations,
  ...audienceActivitiesMutations
};
