/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Company = Entity & {
  __typename?: 'Company';
  contactEmail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  industry: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Contact = Entity & {
  __typename?: 'Contact';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type CreateEntityInput = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType: EntityType;
  industry?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Entity = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum EntityType {
  Company = 'COMPANY',
  Contact = 'CONTACT'
}

export type Mutation = {
  __typename?: 'Mutation';
  createEntity?: Maybe<Entity>;
  updateEntity?: Maybe<Entity>;
};


export type MutationCreateEntityArgs = {
  input?: InputMaybe<CreateEntityInput>;
};


export type MutationUpdateEntityArgs = {
  input?: InputMaybe<UpdateEntityInput>;
};

export type Query = {
  __typename?: 'Query';
  getEntities?: Maybe<Array<Maybe<Entity>>>;
  getEntity?: Maybe<Entity>;
};


export type QueryGetEntityArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateEntityInput = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType: EntityType;
  id: Scalars['ID']['input'];
  industry?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEntityMutationVariables = Exact<{
  input?: InputMaybe<CreateEntityInput>;
}>;


export type CreateEntityMutation = { __typename?: 'Mutation', createEntity?: { __typename?: 'Company', id: string, name: string, industry: string, contactEmail?: string | null } | { __typename?: 'Contact', id: string, name: string, email: string, phone?: string | null } | null };

export type GetEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntitiesQuery = { __typename?: 'Query', getEntities?: Array<{ __typename?: 'Company', id: string, name: string, industry: string, contactEmail?: string | null } | { __typename?: 'Contact', id: string, name: string, email: string, phone?: string | null } | null> | null };

export type UpdateEntityMutationVariables = Exact<{
  input?: InputMaybe<UpdateEntityInput>;
}>;


export type UpdateEntityMutation = { __typename?: 'Mutation', updateEntity?: { __typename?: 'Company', id: string, name: string, industry: string, contactEmail?: string | null } | { __typename?: 'Contact', id: string, name: string, email: string, phone?: string | null } | null };


export const CreateEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateEntityInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEntityMutation, CreateEntityMutationVariables>;
export const GetEntitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEntities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEntities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}}]}}]}}]}}]} as unknown as DocumentNode<GetEntitiesQuery, GetEntitiesQueryVariables>;
export const UpdateEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateEntityInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Contact"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateEntityMutation, UpdateEntityMutationVariables>;