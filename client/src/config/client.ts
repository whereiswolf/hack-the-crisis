import ApolloClient from 'apollo-boost'
import config from './env'

const client = new ApolloClient({
  uri: config.API_URL,
})

export default client
