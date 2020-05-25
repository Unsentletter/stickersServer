import { objectType, mutationField, stringArg } from '@nexus/schema';

import { hashPassword, generateToken } from '../../utils/helpers';
import { getUserId } from '../../utils/getUserId';
import { compare } from 'bcrypt';

export const User = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'signupUser' });
  },
});

export const signin = mutationField('signin', {
  type: 'AuthPayload',
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
  },
  resolve: async (_parent, { email, password }, ctx) => {
    const user = await ctx.prisma.user.findOne({
      where: { email },
    });

    if (!user) {
      throw new Error('Unable to login');
    }
    const isMatch = compare(password, user.password);
    if (!isMatch) {
      throw new Error('Unable to login');
    }
    return {
      user,
      token: generateToken(user.id),
    };
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
