import gql from 'graphql-tag';

export const getDashboardStatistics = gql`
  fragment ArticleStatisticsProperties on ArticleStatistics {
    articleId
    statisticsTitle
    articleTitle
    countLabel
    count
  }

  query getDashboardStatistics {
    getDashboardStatistics {
      mostPopularArticle { ...ArticleStatisticsProperties }
      articleWithMostComments { ...ArticleStatisticsProperties }
      mostLikedArticle { ...ArticleStatisticsProperties }
      error
    }
  }
`;
