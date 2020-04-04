import React from 'react'
import { Typography } from '@material-ui/core'
import { Discount, Countdown, Badge } from 'components'

interface TestProps {}

const Test: React.FC<TestProps> = () => (
  <Typography variant="h2" color="textPrimary">
    Hello
    <Discount oldPrice={456.2} newPrice={123123.3} />
    <Discount oldPrice={456.2} newPrice={123123.3} alignItems="flex-start" />
    <Discount oldPrice={456.2} newPrice={123123.3} alignItems="flex-end" />
    <Countdown
      title={'This Voucher ends in:'}
      subtitle={'Hurry up!'}
      date={new Date().setMonth(12)}
    />
    <Countdown title={'Check it out'} date={new Date().setMonth(12)} />
    <Badge>Gastronomy</Badge>
  </Typography>
)

export default Test
