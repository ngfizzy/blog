import { ForbiddenError } from 'apollo-server-express';
import { verifyAuth } from './verify-auth';

/**
 * Executes a callback if user is authorized
 *
 * @param {string} authToken
 * @param {function} callback
 */
export function withAuth(authToken, callback) {
  const authStatus = verifyAuth(authToken);

  if(!authStatus.success) {
    throw new ForbiddenError('unauthorized');
  }

  return callback();
}

