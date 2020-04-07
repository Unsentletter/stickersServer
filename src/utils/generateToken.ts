import { sign } from 'jsonwebtoken';

export const generateToken = (userId: number) => {
  // TODO - Add a .env file and add the JWT_SECRET to it
  const JWT_SECRET = 'Thisisalongstringineedtoaddtoanenv';
  return sign({ userId }, JWT_SECRET, {
    // TODO - Probably up this token
    expiresIn: '7 days',
  });
};
