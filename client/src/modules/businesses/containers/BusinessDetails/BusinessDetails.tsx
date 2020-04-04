import React from 'react'
import { Grid } from '@material-ui/core'
import BusinessInfo from './BusinessInfo'
import BusinessVouchers from './BusinessVouchers'

interface BusinessDetailsProps {}

const BusinessDetails: React.FC<BusinessDetailsProps> = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item md={8} container direction="column">
          <Grid item>BusinessCard</Grid>
          <Grid item>
            <BusinessInfo />
          </Grid>
        </Grid>
        <Grid item md={4}>
          BestDeals
        </Grid>
      </Grid>
      <Grid item>
        <BusinessVouchers />
      </Grid>
    </Grid>
  )
}

export default BusinessDetails
