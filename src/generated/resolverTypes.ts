/* eslint-disable */

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthenticateUserInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type AuthenticateUserPayload = {
  user: User;
};

export type GetAuthenticatedUserPayload = {
  user?: Maybe<User>;
};

export type Mutation = {
  authenticateUser: AuthenticateUserPayload;
};

export type MutationAuthenticateUserArgs = {
  input: AuthenticateUserInput;
};

export type Query = {
  getAuthenticatedUser: GetAuthenticatedUserPayload;
};

export type User = {
  id: Scalars["ID"];
  username: Scalars["String"];
  fullName: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
};

import { GraphQLResolveInfo } from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  GetAuthenticatedUserPayload: GetAuthenticatedUserPayload;
  User: User;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Mutation: {};
  AuthenticateUserInput: AuthenticateUserInput;
  AuthenticateUserPayload: AuthenticateUserPayload;
  Boolean: Scalars["Boolean"];
};

export type AuthenticateUserPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes["AuthenticateUserPayload"]
> = {
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type GetAuthenticatedUserPayloadResolvers<
  ContextType = any,
  ParentType = ResolversTypes["GetAuthenticatedUserPayload"]
> = {
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Mutation"]
> = {
  authenticateUser?: Resolver<
    ResolversTypes["AuthenticateUserPayload"],
    ParentType,
    ContextType,
    MutationAuthenticateUserArgs
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversTypes["Query"]
> = {
  getAuthenticatedUser?: Resolver<
    ResolversTypes["GetAuthenticatedUserPayload"],
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticateUserPayload?: AuthenticateUserPayloadResolvers<ContextType>;
  GetAuthenticatedUserPayload?: GetAuthenticatedUserPayloadResolvers<
    ContextType
  >;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
