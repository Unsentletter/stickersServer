import { hash } from 'bcrypt';

export const hashPassword = (password: string) => {
  if (password.length < 6) {
    throw new Error('Password must be at least 8 characters');
  }

  return hash(password, 10);
};
