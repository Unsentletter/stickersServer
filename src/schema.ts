import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema, objectType } from 'nexus';

const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('email');
    t.string('password');
    t.boolean('isChild');
    t.string('created_at');
  },
});

export const schema = makeSchema({
  types: [User],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
});
