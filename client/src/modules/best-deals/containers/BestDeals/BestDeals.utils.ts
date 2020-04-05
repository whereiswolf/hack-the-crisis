import { gql } from 'apollo-boost'

export const GET_VOUCHERS = gql`
  query {
    vouchersForYou {
      id
      name
      imageUrl
      description
      expirationDate
      price
      promotion
      tags {
        name
      }
      business {
        name
        vouchers {
          id
          name
          price
          imageUrl
        }
      }
    }
  }
`

export const queries = {
  GET_VOUCHERS,
}
