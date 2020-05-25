import { sign } from 'jsonwebtoken';
import { hash } from 'bcrypt';

export const generateToken = (userId: number) => {
  // TODO - Add a .env file and add the JWT_SECRET to it
  const JWT_SECRET = 'Thisisalongstringineedtoaddtoanenv';
  return sign({ userId }, JWT_SECRET, {
    // TODO - Probably up this token
    expiresIn: '7 days',
  });
};

export const hashPassword = (password: string) => {
  if (password.length < 6) {
    throw new Error('Password must be at least 8 characters');
  }

  return hash(password, 10);
};

// TODO - fix any
export const handleError = (error: any) => {
  // add any other logging mechanisms here e.g. Sentry
  throw error;
};
