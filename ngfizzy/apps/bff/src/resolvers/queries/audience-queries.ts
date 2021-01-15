import dataApi from '../../data';
import { withAuth } from '../../utils';


const audienceQueries = {
  findAudience(_, { audience }) {
    return dataApi.findAudience(audience);
  },
  getMessages(_, __, { auth }) {
    return withAuth(auth, () => dataApi.getMessages());
  }
};

export default audienceQueries;
