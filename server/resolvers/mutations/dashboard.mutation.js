const dataApi = require('../../data');

const dashboardMutations = {
  createCategory(_, { categoryName }) {
    return dataApi.createCategory(categoryName);
  }
};

module.exports = dashboardMutations;
