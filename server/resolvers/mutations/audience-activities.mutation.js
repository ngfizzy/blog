const dataApi = require('../../data');

const audienceActivities = {
  applaud(_, { applaudPayload }) {
    return dataApi.applaud(applaudPayload);
  },
  addComment(_, { commentPayload }) {
    return dataApi.addComment(commentPayload);
  }
};

module.exports = audienceActivities;
