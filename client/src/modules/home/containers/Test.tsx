import React from 'react'
import { Typography } from '@material-ui/core'

interface TestProps {}

const Test: React.FC<TestProps> = () => (
  <Typography variant="h2" color="textPrimary">
    Hello
  </Typography>
)

export default Test
