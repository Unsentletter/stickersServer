import { objectType, queryField, stringArg } from 'nexus';

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
