import { gql } from 'apollo-boost'
import useReactRouter from 'use-react-router'

export function useId() {
  const {
    match: {
      params: { id },
    },
  } = useReactRouter()
  return Number(id)
}

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
