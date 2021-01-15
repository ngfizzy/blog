import { gql } from 'apollo-server';
import articleAndRelatedModels from './shared';
import authorsArticlesTypeDefs from './authors-articles-type-defs';
import articlesTypeDefs from './articles-type-defs';
import dashboardTypeDefs from './dashboard-type-defs';
import audienceActivitiesTypeDefs from './audience-activities-type-defs';
import audienceTypeDefs from './audience-type-defs';
import authTypeDefs from './auth-type-defs';

const root = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const typeDefs = [
  root,
  articlesTypeDefs,
  authorsArticlesTypeDefs,
  authTypeDefs,
  audienceTypeDefs,
  audienceActivitiesTypeDefs,
  articleAndRelatedModels,
  authorsArticlesTypeDefs,
  dashboardTypeDefs,
];

export default typeDefs;
