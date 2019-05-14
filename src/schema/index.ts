import { mergeSchemas, IResolvers } from 'graphql-tools';

import { schema as UserSchema } from './user/schema';
import { resolvers as UserResolvers } from './user/resolvers';

const schema = mergeSchemas({
  schemas: [UserSchema],

  /* I would like to just do this: */
  // resolvers: [UserResolvers],

  /* But, this is all I can get to work right now: */
  resolvers: [UserResolvers as IResolvers],
});

export { schema };
