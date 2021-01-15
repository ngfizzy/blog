import dataApi from '../../data';
import { withAuth } from '../../utils';

const audienceActivities = {
  applaud(_, { applaudPayload }) {
    return dataApi.applaud(applaudPayload);
  },
  addComment(_, { commentPayload }) {
    return dataApi.addComment(commentPayload);
  },
  sendMessage(_, { audience, message}) {
    return dataApi.sendMessage(audience, message);
  },
  toggleCommentDelete(_, { commentId }, { auth }) {
    return withAuth(
      auth,
      () => dataApi.toggleCommentDelete(commentId)
    );
  },
};

export default audienceActivities;
