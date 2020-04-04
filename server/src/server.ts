import { ApolloServer } from 'apollo-server'
import path from 'path'
import { schema } from './schema'
import { createContext } from './context'
import express from 'express'

const app = express()

new ApolloServer({ schema, context: createContext }).listen(
  { port: 4000 },
  () => console.log(`🚀 Unicorns at: 4000`),
)

app.use('/static', express.static(path.join(__dirname, '../images')))

app.listen(3000, () => {
  console.log(`🚀 Static files at: 3000`)
})
