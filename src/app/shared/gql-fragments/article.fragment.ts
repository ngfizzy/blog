import gql from 'graphql-tag';

export const articleFragment = gql`
fragment ArticleProperties on Article {
  id
  title
  body
  createdAt
  updatedAt
  deletedAt
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
  publishedAt
  unpublishedAt
  themeImage
}
`;
