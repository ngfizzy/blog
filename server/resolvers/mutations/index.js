const authorsArticlesMutations = require('./authors-articles.mutations');
const dashboardMutations = require('./dashboard.mutation');
const audienceActivitiesMutations = require('./audience-activities.mutation');

module.exports = {
  ...authorsArticlesMutations,
  ...dashboardMutations,
  ...audienceActivitiesMutations
};
