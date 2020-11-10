const dataApi = require('../../data');
const { withAuth } = require('../../utils');

const audienceActivities = {
  applaud(_, { applaudPayload }) {
    return dataApi.applaud(applaudPayload);
  },
  addComment(_, { commentPayload }) {
    return dataApi.addComment(commentPayload);
  },
  sendMessage(_, { audience, message}) {
    return dataApi.sendMessage(audience, message);
  },
  toggleCommentDelete(_, { commentId }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.toggleCommentDelete(commentId)
    );
  },
};

module.exports = audienceActivities;
