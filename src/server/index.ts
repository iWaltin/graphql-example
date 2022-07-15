import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import { createSchema } from '../utils/createNewSchema'

const main = async () => {
  const schema = await createSchema()
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      req,
    })
  })

  const app = express()
  app.use(cors())
  app.use(express.json())

  await server.start()
  server.applyMiddleware({ app })

  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql')
  })
}
void main()
