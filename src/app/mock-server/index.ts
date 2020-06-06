import {
  Tag,
  Article,
  Category,
  Audience,
  AudienceActivity,
  ApplaudPayload,
  Comment,
  CommentPayload,
  AudienceActivityUpdateSuccessPayload,
} from '../shared/models';
import { CategorySummary } from '../authors-portal/authors-portal-shared/models';

const audienceActivities: AudienceActivity[] = [];
const audienceComments: Comment[] = [];
const audienceRecord: Audience[] = [
  { id: 0, audienceName: 'Morgan', deviceUUID: 'aowk' },
  { id: 1, audienceName: 'Jordan', deviceUUID: 'akwox' },
  { id: 2, audienceName: 'John', deviceUUID: 'adkiklals' },
  { id: 3, audienceName: 'Aisha', deviceUUID: '12svfas' },
  { id: 4, audienceName: 'Jen', deviceUUID: 'lliw.zow' },
  { id: 5, audienceName: 'Yung', deviceUUID: 'alilqla.oiaoso' },
  { id: 6, audienceName: 'Wanja', deviceUUID: '.aoioqlaoo.aose' },
];

const usedIds = [];

const tags: Tag[] = [];
const articles: Article[] = [];
const audienceList: Audience[] = [];
const categories: Category[] = [
  {
    id: 1,
    name: 'poetry',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
  {
    id: 2,
    name: 'tech',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
  {
    id: 3,
    name: 'self help',
    updatedAt: new Date().toString(),
    createdAt: new Date().toString(),
  },
];

function randomId() {
  let randomNumber = Math.floor(Math.random() * 1000);

  while (usedIds.indexOf(randomNumber) > -1) {
    randomNumber = Math.floor(Math.random() * 10000);
  }

  usedIds.push(randomNumber);

  return randomNumber;
}

function randomPublishStatus() {
  const randomNumber = Math.floor(Math.random() * 100);

  return randomNumber % 2 === 0;
}

function generateArticle() {
  const id = randomId();
  const isPublished = randomPublishStatus();
  const article: Article = {
    id,
    authorId: 1,
    published: isPublished,
    title: 'Lorem ipsum ' + id,
    body:
      `Lorem ipsum dolor sit amet,` +
      `  consectetur adipiscing elit.Duis sit amet vulputate quam.Pellentesque` +
      `porta sollicitudin dui, in tincidunt metus tempor vitae.Sed pretium,` +
      `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
      `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod` +
      `sem iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id` +
      `porta neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien` +
      `leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at` +
      `finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
      `<br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate` +
      `quam. Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae. Sed pretium,` +
      `ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque lectus libero in mi.` +
      `  Praesent vulputate justo vel libero rutrum, et euismod sem iaculis.Mauris non erat vitae justo` +
      `congue faucibus nec et leo.Morbi id porta neque.Vestibulum laoreet volutpat risus non hendrerit.` +
      `Vestibulum sapien leo, varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas` +
      `at finibus augue, eget feugiat odio.Ut vel ultricies ipsum.` +
      `<br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet vulputate` +
      `quam.Pellentesque porta sollicitudin dui, in tincidunt metus tempor vitae.Sed` +
      `pretium, ipsum nec gravida consectetur, sapien arcu bibendum orci, ac pellentesque` +
      `lectus libero in mi.Praesent vulputate justo vel libero rutrum, et euismod sem` +
      `iaculis.Mauris non erat vitae justo congue faucibus nec et leo.Morbi id porta` +
      `neque.Vestibulum laoreet volutpat risus non hendrerit.Vestibulum sapien leo,` +
      `varius quis finibus nec, iaculis eget lorem.In nec ex elit.Maecenas at finibus` +
      `augue, eget feugiat odio.Ut vel ultricies ipsum.`,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    tags: [],
    categories: [getRandomCategory()],
    audienceActivities: isPublished ? generateRandomAudienceActivities(id) : [],
  };

  return article;
}

function getRandomCategory() {
  const length = categories.length;

  return categories[Math.floor(Math.random() * length)];
}

function createTag(tagName: string): Tag {
  const createdAt = new Date().toString();
  return {
    name: tagName,
    id: randomId(),
    createdAt,
    updatedAt: createdAt,
  };
}

function createCategory(name: string): Category {
  const createdAt = new Date().toString();
  const category = {
    name,
    createdAt,
    id: randomId(),
    updatedAt: createdAt,
  };

  categories.push(category);

  return category;
}

export function generateArticles(length: number) {
  if (articles.length) {
    return articles;
  }
  while (length > 0) {
    articles.push(generateArticle());
    --length;
  }

  return articles;
}

export function tagArticle(tagName: string, articleId: number): Article {
  const tag = tags.find(t => t.name === tagName);
  const article = articles.find(p => p.id === articleId);

  if (tag) {
    if (article.tags.find(t => t.name === tagName)) {
      return article;
    }
  }

  const created = createTag(tagName);

  tags.push(created);
  article.tags.push(created);

  return article;
}

export function editArticleTitle(articleId: number, title: string) {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.title = title;
  }

  return article;
}

export function editArticleBody(articleId: number, body: string): Article {
  const article = articles.find(p => p.id === articleId);
  if (article) {
    article.body = body;
  }

  return article;
}

export function untagArticle(tagId: number, articleId: number): Article {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    const filtered = article.tags.filter(tag => tag.id !== tagId);
    article.tags = filtered;
    article.updatedAt = new Date().toString();
  }

  return article;
}

export function categorizeArticle(articleId: number, categoryName: string) {
  let category = categories.find(c => c.name === categoryName);

  if (!category) {
    category = createCategory(categoryName);
  }

  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.categories.push(category);
  }

  return article;
}

export function removeArticleFromCategory(
  articleId: number,
  categoryId: number,
) {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    const filtered = article.categories.filter(c => c.id !== categoryId);

    article.categories = filtered;
  }

  return article;
}

export function toggleArticlePublishedState(articleId: number) {
  const article = articles.find(p => p.id === articleId);

  if (article) {
    article.published = !article.published;
  }

  return article;
}

export function getAllArticles() {
  return articles;
}

export function findAudience(options: Partial<Audience>) {
  let audience: Audience = null;

  function fillMissingAudienceDetails(
    foundAudience: Audience,
    providedAudienceAudience: Partial<Audience>,
  ) {
    const { email, audienceName } = providedAudienceAudience;

    if (foundAudience) {
      foundAudience.email = email;
      foundAudience.audienceName = audienceName;
    }
  }

  if (options.id) {
    audience = audienceList.find(aud => aud.id === options.id);
  }

  if (!audience && options.email) {
    audience = audienceList.find(aud => aud.email === options.email);
  } else if (!audience && options.audienceName) {
    audience = audienceList.find(
      aud =>
        aud.audienceName === options.audienceName &&
        aud.deviceUUID === aud.deviceUUID,
    );
  } else {
    audience = audienceList.find(aud => aud.deviceUUID === options.deviceUUID);
  }

  fillMissingAudienceDetails(audience, options);

  return audience;
}

function generateRandomAudienceActivities(
  articleId: number,
  max = 10,
): AudienceActivity[] {
  const noOfComments = Math.round(Math.random() * max);

  function fetchRandomAudience(): Audience {
    const index = Math.floor(Math.random() * audienceRecord.length);

    return audienceRecord[index];
  }

  const articleActivities: AudienceActivity[] = [];

  for (let i = 0; i < noOfComments; i++) {
    const audience = fetchRandomAudience();
    const applauds = Math.round(Math.random() * 50);

    const activityId = !audienceActivities.length
      ? 0
      : audienceActivities[audienceActivities.length - 1].id + 1;

    const activity = {
      id: activityId,
      audience,
      applauds,
      articleId,
      createdAt: new Date().toString(),
      comments: [generateComment(articleId, audience.id)],
    };

    audienceActivities.push(activity);
    articleActivities.push(activity);
  }

  return articleActivities;
}

function generateComment(articleId: number, audienceId: number) {
  const comment =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    ' Duis sit amet vulputate quam. Pellentesque porta sollicitudin dui, ' +
    'in tincidunt metus tempor vitae. Sed pretium, ipsum nec gravida ' +
    'consectetur, sapien arcu bibendum orci, ac pellentesque lectus ' +
    'libero in mi. Praesent vulputate justo vel libero rutrum, et euismod ' +
    'sem iaculis. Mauris non erat vitae justo congue faucibus nec et leo. ' +
    'Morbi id porta neque. Vestibulum';

  return createComment(comment, articleId, audienceId);
}

export function createComment(
  comment: string,
  articleId: number,
  audienceId: number,
): Comment {
  const commentId = !audienceComments.length
    ? 0
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
}

export function findOrCreateAudience(criteria: Partial<Audience>): Audience {
  let audience = findAudience(criteria);

  if (!audience) {
    audience = createAudience(criteria);
  }

  return audience;
}

export function createAudience(audience: Partial<Audience>): Audience {
  const lastAudienceId = audienceRecord[audienceRecord.length - 1].id;

  audience.id = lastAudienceId + 1;

  audienceRecord.push(audience as Audience);

  return audience as Audience;
}

export function addComment(payload: CommentPayload) {
  const { comment, articleId, audience: currentAudience } = payload;

  const audience = findOrCreateAudience(currentAudience);
  const article = articles.find(({ id }) => id === articleId);

  let act = article.audienceActivities.find(
    activity => activity.audience.id === audience.id,
  );

  const com = createComment(comment, articleId, audience.id);
  audienceComments.push(com);

  if (!act) {
    act = createAudienceActivity(payload);
    article.audienceActivities.push(act);
  }

  act.comments.push(com);

  return { articleId, activities: article.audienceActivities };
}

export function applaud(
  payload: ApplaudPayload,
): AudienceActivityUpdateSuccessPayload {
  const { applauds, articleId, audience: currentAudience } = payload;

  const audience = findOrCreateAudience(currentAudience);
  const article = articles.find(({ id }) => id === articleId);

  let act = article.audienceActivities.find(activity => {
    return activity.audience.id === audience.id;
  });

  if (act) {
    act.applauds = applauds;
  } else {
    act = createAudienceActivity(payload);

    audienceActivities.push(act);
    article.audienceActivities.push(act);
  }

  return { articleId, activities: article.audienceActivities };
}

export function createAudienceActivity(
  activity: Partial<AudienceActivity>,
): AudienceActivity {
  const activityId = !audienceActivities.length
    ? 0
    : audienceActivities[audienceActivities.length - 1].id + 1;

  activity.id = activityId;
  activity.comments = [];
  activity.applauds = 0;
  activity.createdAt = new Date().toString();

  audienceActivities.push(activity as AudienceActivity);

  return activity as AudienceActivity;
}

export function getTotalArticleApplauds(activities: AudienceActivity[]) {
  return activities.reduce((sum, activity) => sum + activity.applauds, 0);
}

export function getMostLikedArticle() {
  let mostLiked: Article;
  let greatestLikesCount = 0;

  articles.forEach(article => {
    const likes = article.audienceActivities.length
      ? getTotalArticleApplauds(article.audienceActivities)
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
}

function getCommentsCount(audience: AudienceActivity[]) {
  return audienceActivities.reduce(
    (sum, activity) => sum + activity.comments.length,
    0,
  );
}

export function getArticleWithMostComments() {
  let articleWithMostComments: Article;
  let greatestCommentsCounts = 0;

  articles.forEach(article => {
    const commentsCount = getCommentsCount(article.audienceActivities);

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
}

function getTotalLikesAndComments(activities: AudienceActivity[]) {
  return {
    commentsCount: getCommentsCount(activities),
    likes: getTotalArticleApplauds(activities),
  };
}

function getPopularity(activities: AudienceActivity[]) {
  const { commentsCount, likes } = getTotalLikesAndComments(activities);

  return commentsCount + likes;
}
export function _getMostPopularArticle(sourceArticlesList: Article[]) {
  let mostPopular: Article;
  let greatestPopularity = 0;

  sourceArticlesList.forEach(article => {
    const popularity = getPopularity(article.audienceActivities);

    if (greatestPopularity <= popularity) {
      greatestPopularity = popularity;
      mostPopular = article;
    }
  });

  return { mostPopular, popularity: greatestPopularity };
}

export function getMostPopularArticle() {
  const { mostPopular, popularity } = _getMostPopularArticle(articles);

  return {
    articleId: mostPopular.id,
    statisticsTitle: 'Most Popular Article',
    articleTitle: mostPopular.title,
    countLabel: 'Comments + Likes',
    count: popularity,
  };
}

export function getTop10Articles() {
  const sorted = articles.sort((a, b) => {
    const aPopularity = getPopularity(a.audienceActivities);
    const bPopularity = getPopularity(b.audienceActivities);

    if (aPopularity > bPopularity) {
      return -1;
    } else if (aPopularity < bPopularity) {
      return 1;
    } else {
      return 0;
    }
  });

  return sorted.slice(0, 10);
}

export function getLast10DraftArticles() {
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

  return sorted.slice(0, 10);
}

export function createArticle({ title, body }) {
  const id = randomId();
  const article: Article = {
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

  return article;
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryArticles(categoryId: number) {
  return articles.filter(article => {
    const inCategory = !!article.categories.find(
      category => category.id === categoryId,
    );

    return inCategory;
  });
}

export function getCategorySummary(categoryId: number): CategorySummary {
  const categoryArticles = getCategoryArticles(categoryId);

  return {
    categoryId,
    articlesCount: categoryArticles.length,
    categoryName: categories.find(category => category.id === categoryId).name,
  };
}

export function getCategoriesSummaries() {
  return categories.map(category => getCategorySummary(category.id));
}

generateArticles(200);
