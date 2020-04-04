import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { CountdownRenderProps } from 'react-countdown'
import Badge from '../Badge'
import Separator from './Separator'

const renderNumber = (value: number) => (
  <Badge>{value < 10 ? '0' + value : value}</Badge>
)

const CountdownRender = ({
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) =>
  completed ? (
    <Typography variant="h6" color="textSecondary">
      Deal is gone
    </Typography>
  ) : (
    <Grid container direction="row" alignItems="center" spacing={2}>
      {renderNumber(hours)}
      <Separator />
      {renderNumber(minutes)}
      <Separator />
      {renderNumber(seconds)}
    </Grid>
  )

export default CountdownRender
