import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './schema';

const app = express();

const apolloServer = new ApolloServer({
  schema,
  cacheControl: true,
  debug: true,
});

apolloServer.applyMiddleware({ app, path: `/` });

export { app };
