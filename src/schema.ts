import { nexusPrismaPlugin } from 'nexus-prisma';
import { makeSchema } from '@nexus/schema';
import * as allTypes from './resolvers';

export const schema = makeSchema({
  types: [allTypes],
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
