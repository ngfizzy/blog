const { authToken } = require('../data/data-source');

function verifyAuth(token) {
  const success = token && token.split(' ')[1] === authToken;

  return { success, error: success ? '' : 'unauthorized'};
}

module.exports.verifyAuth = verifyAuth;
