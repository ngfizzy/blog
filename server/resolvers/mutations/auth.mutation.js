const dataApi = require('../../data');

const authMutations = {
  login(_, { username, password }) {
    return dataApi.login(username, password);
  },
};

module.exports = authMutations;
