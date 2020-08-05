const dataApi = require('../../data');


const audienceQueries = {
  findAudience(_, { audience }) {
    return dataApi.findAudience(audience);
  }
};

module.exports = audienceQueries;
