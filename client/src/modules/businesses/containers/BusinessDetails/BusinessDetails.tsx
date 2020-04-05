import React from 'react'
import { Grid } from '@material-ui/core'
import BusinessInfo from './BusinessInfo'
import BusinessVouchers from './BusinessVouchers'
import BusinessCard from './BusinessCard'
import BusinessBestDeal from './BusinessBestDeal'

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

const voucher = {
  id: 1,
  name: 'Orange peeling lesson',
  imageUrl:
    'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
  description: 'string',
  price: 18,
  promotion: 15,
  expirationDate: 'string',
  business: businessMock,
  tags: [],
}

const BusinessDetails: React.FC<BusinessDetailsProps> = () => {
  return (
    <Grid container direction="column">
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
          <BusinessBestDeal data={voucher} />
        </Grid>
      </Grid>
      <Grid item>
        <BusinessVouchers />
      </Grid>
    </Grid>
  )
}

export default BusinessDetails
