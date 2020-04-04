import { gql } from 'apollo-boost'

const VOUCHERS = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

export const queries = {
  VOUCHERS,
}
