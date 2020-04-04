import React from 'react'
import { Grid, GridProps, Typography } from '@material-ui/core'
import BaseCountdown from 'react-countdown'
import { Info } from 'components'
import CountdownRender from './CountdownRender'

interface CountdownProps extends GridProps {
  title?: string
  subtitle?: string
  date: Date | number
}

const Countdown: React.FC<CountdownProps> = ({ title, subtitle, date }) => (
  <Grid container direction="row" alignItems="center" spacing={4}>
    <Grid item>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item>
          <Info variant="body1">{subtitle}</Info>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textPrimary">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <BaseCountdown date={date} renderer={CountdownRender} />
    </Grid>
  </Grid>
)

export default Countdown
