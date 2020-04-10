import { objectType, mutationField, stringArg } from 'nexus';

import { hashPassword } from '../../utils/hashPassword';
import { generateToken } from '../../utils/generateToken';

export const User = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' });
  },
});

export const signup = mutationField('signup', {
  type: 'AuthPayload',
  args: {
    name: stringArg({ required: true }),
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (_parent, { name, email, password }, ctx) => {
    const hashedPassword = await hashPassword(password);
    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return {
      user,
      token: generateToken(user.id),
    };
  },
});

export const createChildAccount = mutationField('createChildAccount', {
  type: 'User',
  args: {
    name: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (_parent, { name, password }, ctx) => {
    const user = await ctx.prisma.user.create({
      data: {
        name,
        password,
        ischild: true,
      },
    });

    return user;
  },
});
