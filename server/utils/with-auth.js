const { ForbiddenError } =  require('apollo-server-express');
const { verifyAuth } = require('./verify-auth');

/**
 * Executes a callback if user is authorized
 *
 * @param {string} authToken
 * @param {function} callback
 */
function withAuth(authToken, callback) {
  const authStatus = verifyAuth(authToken);

  if(!authStatus.success) {
    throw new ForbiddenError('unauthorized');
  }

  return callback();
}

module.exports.withAuth = withAuth;
