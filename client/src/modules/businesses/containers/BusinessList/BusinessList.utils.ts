import { gql } from 'apollo-boost'

const BUSINESSES = gql`
  query {
    businesses {
      id
      name
      imageUrl
      amount
    }
  }
`

export const queries = {
  BUSINESSES,
}
