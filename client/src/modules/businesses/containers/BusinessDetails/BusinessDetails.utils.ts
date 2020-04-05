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

export const GET_BUSINESS = gql`
  query Boucher($id: Int!) {
    business(where: { id: $id }) {
      id
      name
      imageUrl
      siteUrl
      address
      amount
      description
      category {
        name
      }
      vouchers {
        id
        name
        price
        imageUrl
        promotion
        description
        expirationDate
      }
    }
  }
`

export const queries = {
  BUSINESSES,
}
