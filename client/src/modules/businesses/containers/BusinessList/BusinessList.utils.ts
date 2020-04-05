import { gql } from 'apollo-boost'

const BUSINESSES = gql`
  query Businesses($category: Int, $name: String) {
    businesses(categoryId: $category, name: $name) {
      id
      name
      imageUrl
      amount
      avgRating
    }
  }
`

export const queries = {
  BUSINESSES,
}
