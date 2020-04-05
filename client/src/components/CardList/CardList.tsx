import React from 'react'
import { Grid, GridProps } from '@material-ui/core'
import { Voucher, Business } from 'types'
import { Card } from 'components'
import HorizontalCard from 'components/HorizontalCard'

interface CardListProps extends Omit<GridProps, 'onClick'> {
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
  ...props
}) => {
  const CardItem = withHorizontalCards ? HorizontalCard : Card

  return (
    <Grid container spacing={4} {...props}>
      {(items as Voucher[]).map((item) => (
        <CardItem
          type={type}
          key={`cardItem-${item.name}-${item.id}`}
          data={item as Voucher}
          onClick={() => onClick(item)}
        />
      ))}
    </Grid>
  )
}

export default CardList
