
const {
  articles,
  author,
  authToken,
  audienceActivities,
  audienceComments,
  audienceRecord,
  categories,
  generators,
  messages,
  setAuthToken
} = require('./data-source');
const { logout } = require('.');


generators.generateArticles(200);

module.exports = {
  getAllArticles() {
    const sorted = articles.sort((a, b) => {
      const aDate = new Date(a.updatedAt);
      const bDate = new Date(b.updatedAt);

      return bDate.getTime() - aDate.getTime();
    });

    return { articles: sorted };
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

    const { categoriesSummaries } = this.getCategoriesSummaries();

    return {
      categories,
      categoriesSummaries,
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
        article.updatedAt : article.publishedAt;
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
      const likes = (article.audienceActivities || []).length ?
        this.getTotalArticleApplauds(article.audienceActivities)
        : 0;

      if (greatestLikesCount <= likes) {
        greatestLikesCount = likes;
        mostLiked = article;
      }
    });

    return mostLiked ? {
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
    };
  },
  getTotalLikesAndComments(activities) {
    return {
      commentsCount: this.getCommentsCount(activities),
      likes: this.getTotalArticleApplauds(activities),
    };
  },
  getPublishedArticles() {
    const publishedArticles = articles.filter(
      article =>
        !article.categories.find(category => category.name === 'poetry') &&
        article.published,
    );

    return { articles: publishedArticles };
  },
  getPublishedPoems() {
    const publishedPoems = articles.filter(
      article =>
        article.categories.find(category => category.name === 'poetry') &&
          article.published,
    );

    return { poems: publishedPoems };
  },
  getOnePublishedArticle(articleId) {
    const publishedArticle = articles.find(
      found => articleId === found.id && found.published === true,
    );

    return { article: publishedArticle };
  },
  applaud(payload) {
    const { applauds, articleId, audience: currentAudience } = payload;

    const audience = this.findOrCreateAudience(currentAudience);
    const article = articles.find(({ id }) => id === articleId);

    let actIndex = article.audienceActivities.findIndex(activity => {
      return activity.audience.id === audience.id;
    });

    let act;

    if (actIndex < 0) {
      act = this.createAudienceActivity(payload);

      act.applauds = applauds;
      audienceActivities.push(act);
      article.audienceActivities.push(act);
    } else {
      act = article.audienceActivities[actIndex];
      act.applauds = applauds;
    }


    return {
       articleId, activities: article.audienceActivities
    };
  },
  createAudienceActivity(activity) {
    const activityId = !audienceActivities.length ? 0 :
      audienceActivities[audienceActivities.length - 1].id + 1;

    activity.id = activityId;
    activity.comments = [];
    activity.applauds = 0;
    activity.createdAt = new Date().toString();

    audienceActivities.push(activity);

    return activity;
  },
  findOrCreateAudience(criteria) {
    let audience = this.findAudience(criteria);

    if (!audience.audience) {
      audience = { audience: this.createAudience(criteria) };
    }

    return audience;
  },
  findAudience(options) {
    let audience;

    function fillMissingAudienceDetails(
      foundAudience,
      providedAudienceAudience
    ) {
      const { email, audienceName } = providedAudienceAudience;

      if (foundAudience) {
        foundAudience.email = email;
        foundAudience.audienceName = audienceName;
      }
    }

    if (options.id) {
      audience = audienceRecord.find(aud => aud.id === options.id);
    }

    if (!audience && options.email) {
      audience = audienceRecord.find(aud => aud.email === options.email);
    } else if (!audience && options.audienceName) {
      audience = audienceRecord.find(
        aud =>
          aud.audienceName === options.audienceName &&
          aud.deviceUUID === aud.deviceUUID,
      );
    } else {
      audience = audienceRecord.find(aud => aud.deviceUUID === options.deviceUUID);
    }

    fillMissingAudienceDetails(audience, options);

    return {audience};
  },
  createAudience(audience) {
    const lastAudienceId = audienceRecord[audienceRecord.length - 1].id;
    audience.id = lastAudienceId + 1;

    audienceRecord.push(audience);

    return audience;
  },
  addComment(payload) {
    const { comment, articleId, audience: currentAudience } = payload;

    const {audience: {id}} = this.findOrCreateAudience(currentAudience);
    const article = articles.find(({ id }) => id === articleId);

    let act = article.audienceActivities.find(
      activity => activity.audience.id === id,
    );

    const com = this.createComment(comment, articleId, id);
    audienceComments.push(com);

    if (!act) {
      act = this.createAudienceActivity(payload);
      article.audienceActivities.push(act);
    }

    act.comments.push(com);


    return { articleId, activities: article.audienceActivities };
  },
  createComment(comment, articleId, audienceId) {

    const commentId = !audienceComments.length ? 0
      : audienceComments[audienceComments.length - 1].id + 1;

    const comm = {
      articleId,
      audienceId,
      comment,
      id: commentId,
      createdAt: new Date().toString(),
    };

    audienceComments.push(comm);

    return comm;
  },
  sendMessage(aud, message) {
    const { audience } = this.findOrCreateAudience(aud);
    const lastMessage = messages[messages.length - 1];

    const id = lastMessage ? lastMessage.id + 1 : 0;

    messages.push({
      id,
      read: false,
      message,
      audienceId: audience.id,
      email: audience.email,
      name: audience.audienceName,
      createdAt: new Date().toString(),
    });

    return { success: true };
  },
  getMessages() {
    const sorted =  messages.sort((a, b) =>
        (new Date(b.createdAt).getTime()) -
        (new Date(a.createdAt).getTime())
      );

    return { messages: sorted };
  },
  login(username, password) {
    if(username === author.username && password === author.password) {
      return {
        token: authToken
      };
    }

    return { error: 'Wrong username or password' };
  },
  logout() {
      // invalidate authors app supports 1 author for since it's a personal blogging app
      setAuthToken(generators.generateAuthToken());

      return { success: true };
  }
};
