import authorsArticlesQueries from './authors-articles.queries';
import articlesQueries from './articles.queries';
import audienceQueries from './audience-queries';

export default {
  ...authorsArticlesQueries,
  ...articlesQueries,
  ...audienceQueries
};
