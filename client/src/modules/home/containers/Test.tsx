import React from 'react'
import { Typography } from '@material-ui/core'
import Discount from 'components/Discount/Discount'

interface TestProps {}

const Test: React.FC<TestProps> = () => (
  <Typography variant="h2" color="textPrimary">
    Hello
    <Discount oldPrice={456.2} newPrice={123123.3} />
    <Discount oldPrice={456.2} newPrice={123123.3} alignItems="flex-start" />
  </Typography>
)

export default Test
