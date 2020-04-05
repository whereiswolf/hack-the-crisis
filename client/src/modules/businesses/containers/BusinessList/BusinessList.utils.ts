import { gql } from 'apollo-boost'

const BUSINESSES = gql`
  query {
    businesses {
      id
      name
      imageUrl
    }
  }
`

export const queries = {
  BUSINESSES,
}
