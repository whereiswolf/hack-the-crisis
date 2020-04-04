import { ApolloServer } from 'apollo-server'
import path from 'path'
import { schema } from './src/schema'
import { createContext } from './src/context'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import { checkUser } from './src/modules/auth/auth.middleware'

const app = express()

const midlewares = [checkUser]

new ApolloServer({
  schema: applyMiddleware(schema, ...midlewares),
  context: createContext
}).listen({ port: 4000 }, () => console.log(`🚀 Unicorns at: 4000`))

app.use('/static', express.static(path.join(__dirname, '../images')))

app.listen(2000, () => {
  console.log(`🚀 Static files at: 2000`)
})
