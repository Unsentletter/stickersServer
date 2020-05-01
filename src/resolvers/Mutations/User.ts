import { objectType, mutationField, stringArg } from 'nexus';

import { hashPassword, generateToken } from '../../utils/helpers';
import { getUserId } from '../../utils/getUserId';

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
    const userId = getUserId(ctx);
    if (!userId) {
      // TODO -think I might need to throw an error here
      return;
    }
    const user = await ctx.prisma.user.create({
      data: {
        name,
        password,
        ischild: true,
      },
    });
    await ctx.prisma.relationship.create({
      data: {
        parent: {
          connect: {
            id: userId,
          },
        },
        child: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return user;
  },
});
