import React from 'react'
import { Grid } from '@material-ui/core'
import { Voucher, Business } from 'types'
import { Card } from 'components'
import HorizontalCard from 'components/HorizontalCard'

interface CardListProps {
  items: object[]
  type?: 'voucher' | 'business'
  onClick?: (voucher: Voucher | Business) => any
  withHorizontalCards?: boolean
}

const CardList: React.FC<CardListProps> = ({
  items = [],
  type = 'voucher',
  onClick = () => {},
  withHorizontalCards = false,
}) => {
  const CardItem = withHorizontalCards ? HorizontalCard : Card

  return (
    <Grid container spacing={4}>
      {(items as Voucher[]).map((item: Voucher | Business) => (
        <Card
          type={type}
          key={`cardItem-${item.name}-${item.id}`}
          data={item}
          onClick={() => onClick(item)}
        />
      ))}
    </Grid>
  )
}

export default CardList
