
const {
  articles,
  audienceActivities,
  audienceComments,
  audienceRecord,
  categories,
  generators,
} = require('./data-source');


generators.generateArticles(200);

module.exports = {
  getAllArticles() {
    const sorted = articles.sort((a, b) => {
      const aDate = new Date(a.updatedAt);
      const bDate = new Date(b.updatedAt);

      if(a.updatedAt > b.updatedAt) {
        return -1;
      }

      return 1;
    });

    return { articles: sorted }
  },
  getOneArticle(articleId) {
    const article = articles.find(
      found => articleId === found
    );

    return { article };
  },
  editArticleTitle(articleId, title) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      article.title = title;
    }

    return {article};
  },
  createArticle(title, body) {
    const id = generators.randomId();
    const article = {
      id,
      title,
      body,
      authorId: 1,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      categories: [],
      tags: [],
      audienceActivities: [],
      published: false,
    };

    articles.push(article);

    return {article};
  },
  deleteArticle(articleId) {
    const index = articles.findIndex(a => a.id === articleId);
    let error = null;

    if (index > -1) {
      articles.splice(index, 1);
    } else {
      error = 'Article not found';
    }

    return { articles, error };
  },
  editArticleBody(articleId, body) {
    const article = articles.find(p => p.id === articleId);

    if(article) {
      article.body = body;
      article.updatedAt = new Date().toString();
    }

    return {article};
  },
  tagArticle(articleId, tagName) {
    const tag = tags.find(t => t.name === tagName);
    const article = articles.find(p => p.id === articleId);

    if (tag) {
      if (article.tags.find(t => t.name === tagName)) {
        return article;
      }
    }


    const created = generators.createTag(tagName);

    tags.push(created);
    article.tags.push(created);
    article.updatedAt = new Date().toString();

    return {article};
  },
  untagArticle(articleId, tagId) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      const filtered = article.tags.filter(tag => tag.id !== tagId);
      article.tags = filtered;
      article.updatedAt = new Date().toString();
    }

    return {article};
  },
  categorizeArticle(articleId, categoryName) {
    let category = categories.find(c => c.name === categoryName);

    if (!category) {
      const { createdCategory } = this.createCategory(categoryName);
      category = createdCategory;
    }

    const article = articles.find(p => p.id === articleId);

    if (article) {
      article.categories.push(category);
    }

    return {article};
  },
  createCategory(name) {
    const createdAt = new Date().toString();
    const category = {
      name,
      createdAt,
      id: generators.randomId(),
      updatedAt: createdAt,
    };

    categories.push(category);

    return {
      categories,
      categoriesSummaries: this.getCategoriesSummaries(),
      createdCategory: category,
    };
  },
  getCategoriesSummaries() {
    const categoriesSummaries = categories.map(category => this.getCategorySummary(category.id));

    return { categoriesSummaries };
  },
  getCategorySummary(categoryId) {
    const categoryArticles = this.getCategoryArticles(categoryId);

    return {
      categoryId,
      articlesCount: categoryArticles.length,
      categoryName: categories.find(category => category.id === categoryId).name,
    };
  },
  getCategoryArticles(categoryId) {
    return articles.filter(article => {
      const inCategory = !!article.categories.find(
        category => category.id === categoryId,
      );

      return inCategory;
    });
  },
  removeArticleFromCategory(articleId, categoryId) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      const filtered = article.categories.filter(c => c.id !== categoryId);

      article.categories = filtered;
    }

    return {article};
  },
  toggleArticlePublishedState(articleId) {
    const article = articles.find(p => p.id === articleId);

    if (article) {
      article.published = !article.published;
      article.updatedAt = new Date().toString();
      article.publishedAt = article.published ?
        article.updatedAt : article.publishedAt
      article.unpublishedAt = !article.published ?
        article.updatedAt : article.unpublishedAt;
    }

    return { article };
  },
  getLast10Drafts() {
    const drafts = articles.filter(article => !article.published);

    const sorted = drafts.sort((a, b) => {
      const aTimestamp = new Date(a.updatedAt).getTime();
      const bTimestamp = new Date(b.updatedAt).getTime();
      if (aTimestamp > bTimestamp) {
        return -1;
      } else if (aTimestamp < bTimestamp) {
        return 1;
      } else {
        return 0;
      }
    });

    return { articles: sorted.slice(0, 10) };
  },
  getTop10Articles() {
    const sorted = articles.sort((a, b) => {
      const aPopularity = this.getPopularity(a.audienceActivities);
      const bPopularity = this.getPopularity(b.audienceActivities);

      if (aPopularity > bPopularity) {
        return -1;
      } else if (aPopularity < bPopularity) {
        return 1;
      } else {
        return 0;
      }
    });

    return { articles: sorted.slice(0, 10)};
  },
  getPopularity(activities) {
    const { commentsCount, likes } = this.getTotalLikesAndComments(activities);

    return commentsCount + likes;
  },
  getCommentsCount() {
    return audienceActivities.reduce(
      (sum, activity) => sum + activity.comments.length,
      0,
    );
  },
  getTotalArticleApplauds(activities) {
    return activities.reduce((sum, activity) => sum + activity.applauds, 0);
  },
  getMostLikedArticle() {
    let mostLiked;
    let greatestLikesCount = 0;

    articles.forEach(article => {
      const likes = (article.audienceActivities || []).length
        ? this.getTotalArticleApplauds(article.audienceActivities)
        : 0;

      if (greatestLikesCount <= likes) {
        greatestLikesCount = likes;
        mostLiked = article;
      }
    });

    return mostLiked
      ? {
          articleId: mostLiked.id,
          statisticsTitle: 'Most Liked Article',
          articleTitle: mostLiked.title,
          countLabel: 'Comments',
          count: greatestLikesCount,
        }
      : null;
  },
  getArticleWithMostComments() {
    let articleWithMostComments;
    let greatestCommentsCounts = 0;

    articles.forEach(article => {
      const commentsCount = this.getCommentsCount(article.audienceActivities);

      if (greatestCommentsCounts <= commentsCount) {
        greatestCommentsCounts = commentsCount;
        articleWithMostComments = article;
      }
    });

    return {
      articleId: articleWithMostComments.id,
      statisticsTitle: 'Most Commented On',
      articleTitle: articleWithMostComments.title,
      countLabel: 'Comments',
      count: greatestCommentsCounts,
    };
  },
  getMostPopularArticle() {
    const { mostPopular, popularity } = this._getMostPopularArticle(articles);

    return {
      articleId: mostPopular.id,
      statisticsTitle: 'Most Popular Article',
      articleTitle: mostPopular.title,
      countLabel: 'Comments + Likes',
      count: popularity,
    };
  },
  getMostPopularArticle() {
    const { mostPopular, popularity } = this._getMostPopularArticle(articles);

    return {
      articleId: mostPopular.id,
      statisticsTitle: 'Most Popular Article',
      articleTitle: mostPopular.title,
      countLabel: 'Comments + Likes',
      count: popularity,
    };
  },
  _getMostPopularArticle(sourceArticlesList) {
    let mostPopular;
    let greatestPopularity = 0;

    sourceArticlesList.forEach(article => {
      const popularity = this.getPopularity(article.audienceActivities);

      if (greatestPopularity <= popularity) {
        greatestPopularity = popularity;
        mostPopular = article;
      }
    });

    return { mostPopular, popularity: greatestPopularity };
  },
  getDashboardStatistics() {
    return {
      mostLikedArticle: this.getMostLikedArticle(),
      articleWithMostComments: this.getArticleWithMostComments(),
      mostPopularArticle: this.getMostPopularArticle(),
    }
  },
  getPopularity(activities) {
    const { commentsCount, likes } = this.getTotalLikesAndComments(activities);

    return commentsCount + likes;
  },
  getTotalLikesAndComments(activities) {
    return {
      commentsCount: this.getCommentsCount(activities),
      likes: this.getTotalArticleApplauds(activities),
    };
  },
}
