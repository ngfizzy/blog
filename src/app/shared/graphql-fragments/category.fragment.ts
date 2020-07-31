import gql from 'graphql-tag';

export const categoryPropsFragment = gql`
  fragment CategoryProperties on Category {
    id
    name
    createdAt
    updatedAt
  }
`;
