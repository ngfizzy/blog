import {gql} from 'apollo-angular';


export const categoryPropsFragment = gql`
  fragment CategoryProperties on Category {
    id
    name
    createdAt
    updatedAt
  }
`;
