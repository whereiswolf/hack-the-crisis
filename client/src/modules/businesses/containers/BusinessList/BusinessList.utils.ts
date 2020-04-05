import { gql } from 'apollo-boost'

const BUSINESSES = gql`
  query {
    businesses {
      id
      name
    }
  }
`

export const queries = {
  BUSINESSES,
}
