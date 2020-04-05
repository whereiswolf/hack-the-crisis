import { gql } from 'apollo-boost'

const VOUCHERS = gql`
  query {
    vouchers {
      id
      name
      price
      imageUrl
    }
  }
`

export const queries = { VOUCHERS }
