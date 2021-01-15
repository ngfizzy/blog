import dataApi from '../../data'

const authMutations = {
  login(_, { username, password }) {
    return dataApi.login(username, password);
  },
  logout(_, { authToken }) {
    return dataApi.logout(authToken);
  }
};

export default authMutations;
