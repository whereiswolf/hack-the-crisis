import React from 'react'
import { Grid, Typography } from '@material-ui/core'

interface BackBusinessProps {}

const BackBusiness: React.FC<BackBusinessProps> = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" color="textPrimary">
        Back this{' '}
        <Typography color="secondary" component="span" variant="h5">
          business
        </Typography>
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Do you want to show some extra love ? Pick the price and add it to the
        total amount of your current Voucher order.
      </Typography>
      <br />
    </Grid>
  )
}

export default BackBusiness
