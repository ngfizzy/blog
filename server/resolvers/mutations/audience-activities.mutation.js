const dataApi = require('../../data');

const audienceActivities = {
  applaud(_, { applaudPayload }) {
    return dataApi.applaud(applaudPayload);
  },
};

module.exports = audienceActivities;
