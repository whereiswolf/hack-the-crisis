import React from 'react'
import { Grid } from '@material-ui/core'
import { Voucher } from 'types'
import { Card } from 'components'

interface CardListProps {
  items: Voucher[]
}

const CardList: React.FC<CardListProps> = ({ items = [] }) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Card key={`cardItem-${item.name}-${item.id}`} data={item} />
      ))}
    </Grid>
  )
}

export default CardList
