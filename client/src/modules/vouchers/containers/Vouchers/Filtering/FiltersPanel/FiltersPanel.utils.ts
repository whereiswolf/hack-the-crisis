import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Category } from 'types'

const CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`

export const queries = { CATEGORIES }

const emptyValue = { title: '-', value: '' }

export const useCategories = () => {
  const { data } = useQuery<{ categories: Category[] }>(queries.CATEGORIES)
  if (!data) return []
  return [
    emptyValue,
    ...data.categories.map(({ id, name }) => ({
      title: name,
      value: id,
    })),
  ]
}

export const distances = [
  emptyValue,
  { title: '+5 km', value: 5 },
  { title: '+10 km', value: 10 },
  { title: '+15 km', value: 15 },
  { title: '+25 km', value: 25 },
]
