import data from '../data/data-source';

export function verifyAuth(token) {
  const success = token && token.split(' ')[1] === data.authToken;

  return { success, error: success ? '' : 'unauthorized'};
}

