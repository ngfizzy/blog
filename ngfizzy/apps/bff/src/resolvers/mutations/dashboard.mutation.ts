import dataApi from '../../data';
import { withAuth } from '../../utils';

const dashboardMutations = {
  createCategory(_, { categoryName }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.createCategory(categoryName)
    );
  }
};

export default dashboardMutations;
