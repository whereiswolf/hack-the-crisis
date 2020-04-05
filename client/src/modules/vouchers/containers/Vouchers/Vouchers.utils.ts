import { gql } from 'apollo-boost'

const VOUCHERS = gql`
  query Vouchers($category: Int, $city: String) {
    vouchers(category: $category, city: $city) {
      id
      name
      price
      imageUrl
    }
  }
`

export const queries = {
  VOUCHERS,
}
