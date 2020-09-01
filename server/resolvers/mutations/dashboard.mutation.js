const dataApi = require('../../data');
const { withAuth } = require('../../utils');

const dashboardMutations = {
  createCategory(_, { categoryName }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.createCategory(categoryName)
    );
  }
};

module.exports = dashboardMutations;
