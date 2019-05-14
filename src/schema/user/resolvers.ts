import { Resolvers } from '../../generated/resolverTypes';

const user = {
  id: `1`,
  username: `foobar`,
  fullName: `Foo Bar`,
  email: `foo@bar.com`,
};

export const resolvers: Resolvers = {
  Query: {
    getAuthenticatedUser(_, args, ctx) {
      console.log(args);
      console.log(ctx);

      return { user };
    },
  },
  Mutation: {
    authenticateUser(_, args, ctx) {
      console.log(args);
      console.log(ctx);

      return { user };
    },
  },
};
