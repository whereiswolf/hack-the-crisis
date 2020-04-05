import React from 'react'
import { Grid } from '@material-ui/core'
import { Voucher } from 'types'
import { Card } from 'components'

interface CardListProps {
  items: Voucher[]
  onClick?: (voucher: Voucher) => any
}

const CardList: React.FC<CardListProps> = ({
  items = [],
  onClick = () => {},
}) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Card
          key={`cardItem-${item.name}-${item.id}`}
          data={item}
          onClick={() => onClick(item)}
        />
      ))}
    </Grid>
  )
}

export default CardList
