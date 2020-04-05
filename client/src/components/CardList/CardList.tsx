import React from 'react'
import { Grid } from '@material-ui/core'
import { Voucher } from 'types'
import { Card } from 'components'
import HorizontalCard from 'components/HorizontalCard'

interface CardListProps {
  items: Voucher[]
  onClick?: (voucher: Voucher) => any
  withHorizontalCards?: boolean
}

const CardList: React.FC<CardListProps> = ({
  items = [],
  onClick = () => {},
  withHorizontalCards = false,
}) => {
  const CardItem = withHorizontalCards ? HorizontalCard : Card

  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <CardItem
          key={`cardItem-${item.name}-${item.id}`}
          data={item}
          onClick={() => onClick(item)}
        />
      ))}
    </Grid>
  )
}

export default CardList
