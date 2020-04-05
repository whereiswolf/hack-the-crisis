import { gql } from 'apollo-boost'
import { useState } from 'react'

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

export interface CreateOrder {
  createOneOrder: {
    id: number
  }
}

export const CREATE_ORDER = gql`
  mutation CreateOneOrder(
    $email: String!
    $name: String!
    $count: Int
    $voucherId: Int
  ) {
    createOneOrder(
      data: {
        email: $email
        name: $name
        count: $count
        voucher: { connect: { id: $voucherId } }
      }
    ) {
      id
    }
  }
`

export const useVouchersNumber = (price = 0, bonusPrice = 0) => {
  const [vouchersNumber, setVouchersNumber] = useState(0)
  const addVoucher = () => setVouchersNumber(vouchersNumber + 1)
  const removeVoucher = () =>
    vouchersNumber > 0 && setVouchersNumber(vouchersNumber - 1)

  return {
    addVoucher,
    removeVoucher,
    vouchersNumber,
    vouchersPrice: (vouchersNumber * price + bonusPrice).toFixed(2),
    resetVouchersNumber: () => setVouchersNumber(0),
  }
}

const DESTINATION = {
  MYSELF: 'MYSELF',
  FRIEND: 'FRIEND',
}

export const destinationOptions = [
  { value: DESTINATION.MYSELF, title: 'The Voucher is for myself' },
  { value: DESTINATION.FRIEND, title: 'The Voucher is for someone else' },
]

const placeholders = {
  [DESTINATION.MYSELF]: {
    name: 'Enter your full name',
    email: 'Enter your email',
  },
  [DESTINATION.FRIEND]: {
    name: "Enter friend's full name",
    email: "Enter friend's email",
  },
}

export const useOrderForm = () => {
  const [destination, setDestination] = useState(DESTINATION.MYSELF)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  return {
    destinationProps: {
      controlledValue: destination,
      onChange: (val: any) => setDestination(val),
    },
    nameProps: {
      value: name,
      onChange: (val: any) => setName(val),
      placeholder: placeholders[destination].name,
    },
    emailProps: {
      value: email,
      onChange: (val: any) => setEmail(val),
      placeholder: placeholders[destination].email,
    },
    noteProps: destination === DESTINATION.FRIEND && {
      value: note,
      onChange: (val: any) => setNote(val),
      placeholder: 'Say something to your friend!',
    },
    resetForm: () => {
      setName('')
      setEmail('')
      setNote('')
      setDestination(DESTINATION.MYSELF)
    },
  }
}

export const useBonusPrice = () => {
  const [currentBonusPrice, setCurrentBonusPrice] = useState('')
  const [totalBonusPrice, setTotalBonusPrice] = useState(0)

  return {
    submitBonusPrice: () => {
      setTotalBonusPrice(totalBonusPrice + (Number(currentBonusPrice) || 0))
      setCurrentBonusPrice('0.00')
    },
    bonusPriceProps: {
      value: currentBonusPrice,
      onChange: (val: any) => setCurrentBonusPrice(val),
      placeholder: '0.00',
    },
    totalBonusPrice,
    resetBonus: () => setTotalBonusPrice(0),
  }
}
