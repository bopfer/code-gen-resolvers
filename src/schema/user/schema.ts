import { gql } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    fullName: String!
    email: String
  }

  type GetAuthenticatedUserPayload {
    user: User
  }

  input AuthenticateUserInput {
    username: String!
    password: String!
  }

  type AuthenticateUserPayload {
    user: User!
  }

  type Query {
    getAuthenticatedUser: GetAuthenticatedUserPayload!
  }

  type Mutation {
    authenticateUser(input: AuthenticateUserInput!): AuthenticateUserPayload!
  }
`;

export const schema = makeExecutableSchema({ typeDefs });
