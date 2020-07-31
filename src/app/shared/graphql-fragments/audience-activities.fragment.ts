import gql from 'graphql-tag';

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
      comment
      createdAt
      articleId
      audienceId
    }
  }
`;
