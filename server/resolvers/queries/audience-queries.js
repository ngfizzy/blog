const dataApi = require('../../data');
const { withAuth } = require('../../utils');


const audienceQueries = {
  findAudience(_, { audience }) {
    return dataApi.findAudience(audience);
  },
  getMessages(_, __, { auth }) {
    return withAuth(auth, () => dataApi.getMessages());
  }
};

module.exports = audienceQueries;
