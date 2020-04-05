import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Category } from 'types'
import BusinessType from 'enums/BusinessType'

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

export const types = [
  {
    value: '',
    title: 'All',
  },
  {
    value: BusinessType.Local,
    title: 'Local',
  },
  {
    value: BusinessType.Online,
    title: 'Online',
  },
]
