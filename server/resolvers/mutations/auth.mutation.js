const dataApi = require('../../data');

const authMutations = {
  login(_, { username, password }) {
    return dataApi.login(username, password);
  },
  logout(_, { authToken }) {
    return dataApi.logout(authToken);
  }
};

module.exports = authMutations;
