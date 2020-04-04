import { gql } from 'apollo-boost'

const VOUCHERS = gql`
  query {
    vouchers {
      id
      name
      price
    }
  }
`

export const queries = {
  VOUCHERS,
}
