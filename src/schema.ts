import { nexusPrismaPlugin } from 'nexus-prisma';
import { intArg, makeSchema, objectType, stringArg } from 'nexus';

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id(),
      t.model.name(),
      t.model.email(),
      t.model.password(),
      t.model.isChild();
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
