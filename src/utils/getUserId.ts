import { verify } from 'jsonwebtoken';
import { Token } from '../types';
import { errors } from './errors';
import { handleError } from './helpers';

export const tokens = {
  access: {
    name: 'ACCESS_TOKEN',
    expiry: '1d',
  },
};

//   export const APP_SECRET = process.env.APP_SECRET
// TODO - fix any
export const getUserId = (context: any) => {
  const Authorization = context.request.request.headers.authorization;
  try {
    const token = Authorization.replace('Bearer ', '');
    // TODO - Need to add app asecret to .env file
    const verifiedToken = verify(
      token,
      'Thisisalongstringineedtoaddtoanenv',
    ) as Token;

    if (!verifiedToken.userId && verifiedToken.type !== tokens.access.name) {
      handleError(errors.notAuthenticated);
    }

    return parseInt(verifiedToken.userId);
  } catch (err) {
    handleError(errors.notAuthenticated);
  }
};
