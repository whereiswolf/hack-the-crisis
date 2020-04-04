import { gql } from 'apollo-boost'

export const GET_ORDER = gql`
  query Voucher($id: Int!) {
    voucher(where: { id: $id }) {
      id
      name
      imageUrl
      description
      price
      promotion
      tags {
        name
      }
    }
  }
`
