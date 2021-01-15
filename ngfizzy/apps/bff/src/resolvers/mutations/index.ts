import authorsArticlesMutations from './authors-articles.mutations';
import dashboardMutations from './dashboard.mutation';
import audienceActivitiesMutations from './audience-activities.mutation';
import authMutations from './auth.mutation';

export default {
  ...authMutations,
  ...authorsArticlesMutations,
  ...dashboardMutations,
  ...audienceActivitiesMutations
};
