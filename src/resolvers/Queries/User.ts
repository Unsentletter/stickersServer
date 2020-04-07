import { objectType } from 'nexus';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.users({ alias: 'findAllUsers' });
  },
});
