import gql from 'graphql-tag';

export const articlesQuery = gql`
  {
    articles {
      id
      title
      body
      tags {
        id
        name
        createdAt
        updatedAt
      }
      categories {
        id
        name
        updatedAt
        createdAt
      }
      audienceActivities {
        id
        articleId
        applauds
        audience{
          id
          email
          audienceName
          deviceUUID
        }
        comments {
          id
          articleId
          audienceId
          createdAt
          comment
        }
        createdAt
      }
      published
      themeImage
    }
  }
`;
