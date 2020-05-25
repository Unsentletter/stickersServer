import { objectType, queryField, stringArg } from '@nexus/schema';

import { getUserId } from '../../utils/getUserId';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.user({ alias: 'findAllUsers' });
  },
});

export const getUser = queryField('getUser', {
  type: 'User',
  resolve: async (_parent, {}, ctx) => {
    const userId = getUserId(ctx);
    if (!userId) {
      // TODO -think I might need to throw an error here
      return;
    }
    const user = await ctx.prisma.user.findOne({
      where: {
        id: userId,
      },
    });
    return user;
  },
});

export const getChildren = queryField('getChildren', {
  type: 'User',
  list: true,
  resolve: async (_parent, {}, ctx) => {
    const userId = getUserId(ctx);
    if (!userId) {
      // TODO -think I might need to throw an error here
      return;
    }
    console.log('USER', userId);
    const children = await ctx.prisma.relationship.findMany({
      where: {
        parent_id: userId,
      },
    });
    console.log('CHILDREN', children);
    return children;
  },
});
