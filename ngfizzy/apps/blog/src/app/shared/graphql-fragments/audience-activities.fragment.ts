import {gql} from 'apollo-angular';


export const audienceActivityProps = gql`
fragment AudienceActivityProperties on AudienceActivity {
    id
    audience {
      id
      email
      audienceName
      deviceUUID
    }
    applauds
    articleId
    createdAt
    comments {
      id
      comment
      createdAt
      articleId
      audienceId
      isDeleted
    }
  }
`;
