/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n\tmutation CreateEntity($input: CreateEntityInput) {\n\t\tcreateEntity(input: $input) {\n\t\t\t... on Contact {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t}\n\t\t\t... on Company {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tindustry\n\t\t\t\tcontactEmail\n\t\t\t}\n\t\t}\n\t}\n": types.CreateEntityDocument,
    "\n  query GetEntities {\n    getEntities {\n      ... on Contact {\n        id\n        name\n        email\n        phone\n      }\n      ... on Company {\n        id\n        name\n        industry\n        contactEmail\n      }\n    }\n  }\n": types.GetEntitiesDocument,
    "\n  mutation UpdateEntity($input: UpdateEntityInput) {\n    updateEntity(input: $input) {\n      ... on Contact {\n        id\n        name\n        email\n        phone\n      }\n      ... on Company {\n        id\n        name\n        industry\n        contactEmail\n      }\n    }\n  }\n": types.UpdateEntityDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateEntity($input: CreateEntityInput) {\n\t\tcreateEntity(input: $input) {\n\t\t\t... on Contact {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t}\n\t\t\t... on Company {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tindustry\n\t\t\t\tcontactEmail\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateEntity($input: CreateEntityInput) {\n\t\tcreateEntity(input: $input) {\n\t\t\t... on Contact {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t}\n\t\t\t... on Company {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tindustry\n\t\t\t\tcontactEmail\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetEntities {\n    getEntities {\n      ... on Contact {\n        id\n        name\n        email\n        phone\n      }\n      ... on Company {\n        id\n        name\n        industry\n        contactEmail\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEntities {\n    getEntities {\n      ... on Contact {\n        id\n        name\n        email\n        phone\n      }\n      ... on Company {\n        id\n        name\n        industry\n        contactEmail\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateEntity($input: UpdateEntityInput) {\n    updateEntity(input: $input) {\n      ... on Contact {\n        id\n        name\n        email\n        phone\n      }\n      ... on Company {\n        id\n        name\n        industry\n        contactEmail\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateEntity($input: UpdateEntityInput) {\n    updateEntity(input: $input) {\n      ... on Contact {\n        id\n        name\n        email\n        phone\n      }\n      ... on Company {\n        id\n        name\n        industry\n        contactEmail\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;