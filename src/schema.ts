import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema, objectType } from 'nexus';

const Users = objectType({
  name: 'Users',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.password();
    t.model.ischild();
    t.model.created_at();
  },
});

export const schema = makeSchema({
  types: [Users],
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
