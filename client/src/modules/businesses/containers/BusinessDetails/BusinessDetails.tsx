import React from 'react'
import { Grid } from '@material-ui/core'
import BusinessInfo from './BusinessInfo'
import BusinessVouchers from './BusinessVouchers'
import BusinessCard from './BusinessCard'
import { Wrapper } from './BusinessDetails.style'

interface BusinessDetailsProps {}

const businessMock = {
  id: 123,
  name: 'Juicy Orange',
  city: 'Stockholm',
  address: 'Kangaskan 4, Uppsala',
  amount: 99,
  description: 'Description here',
  imageUrl:
    'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
  category: {
    id: 1222,
    name: 'Restaurant',
  },
  type: 'any',
  vouchers: [],
  siteUrl: 'https://juicy-orange.jj',
}

const BusinessDetails: React.FC<BusinessDetailsProps> = () => {
  return (
    <Wrapper container direction="column">
      <Grid item container>
        <Grid item md={8} container direction="column">
          <Grid item>
            <BusinessCard data={businessMock} />
          </Grid>
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
    </Wrapper>
  )
}

export default BusinessDetails
