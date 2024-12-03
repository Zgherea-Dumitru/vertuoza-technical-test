import { join } from 'path'
import { readFileSync } from 'fs'
import { ApolloServer } from '@apollo/server';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { startStandaloneServer } from '@apollo/server/standalone';

const mockData = [
  {
    entityType: 'Contact',
    id: '48eb4b73-f034-4383-bf05-99c208bbd0a8',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '432-739-0286',
  },
  {
    entityType: 'Company',
    id: '48eb4b73-f034-4383-bf05-99c208bbd0a9',
    name: 'Tesla',
    industry: 'Car production',
    contactEmail: 'tesla@example.com',
  }
]

const typeDefs = readFileSync(join(`${process.cwd()}/mock_server`, 'schema.graphql'), {
  encoding: 'utf8'
})

const schema = makeExecutableSchema({
  typeDefs
})
const schemaWithMocks = addMocksToSchema({
  schema,
  resolvers: () => ({
    Entity: {
      __resolveType: (o: { entityType: 'Company' | 'Contact' }) => {
        return o.entityType
      }
    },
    Query: { getEntities: () => mockData },
    Mutation: {
      createEntity: (_, { input }) => ({
        ...input,
        entityType: input.entityType === 'CONTACT' ? 'Contact' : 'Company',
      }),
      updateEntity: (_, { input }) => {
        const entry = mockData.find((d) => d.id === input.id)

        return {
          ...entry,
          ...input,
          entityType: input.entityType === 'CONTACT' ? 'Contact' : 'Company'
        }
      }
    }
  })
})

const server = new ApolloServer({
  schema: schemaWithMocks
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Listening on ' + url)