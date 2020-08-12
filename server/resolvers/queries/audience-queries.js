const dataApi = require('../../data');


const audienceQueries = {
  findAudience(_, { audience }) {
    return dataApi.findAudience(audience);
  },
  getMessages() {
    return dataApi.getMessages();
  }
};

module.exports = audienceQueries;
