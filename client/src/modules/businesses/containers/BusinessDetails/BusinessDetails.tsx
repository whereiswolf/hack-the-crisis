import React from 'react'
import { Grid } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import BusinessInfo from './BusinessInfo'
import BusinessVouchers from './BusinessVouchers'
import BusinessCard from './BusinessCard'
import BusinessBestDeal from './BusinessBestDeal'
import { useId } from 'utils'
import { GET_BUSINESS } from './BusinessDetails.utils'
import { BusinessData } from 'types'

interface BusinessDetailsProps {}

const BusinessDetails: React.FC<BusinessDetailsProps> = () => {
  const id = useId()
  const { data: { business } = {} } = useQuery<BusinessData>(GET_BUSINESS, {
    variables: { id },
  })

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item md={8} container direction="column">
          <Grid item>
            <BusinessCard data={business} />
          </Grid>
          <Grid item>
            <BusinessInfo data={business} />
          </Grid>
        </Grid>
        <Grid item md={4}>
          <BusinessBestDeal
            category={business?.category}
            voucher={business?.vouchers[0]}
          />
        </Grid>
      </Grid>
      <Grid item>
        <BusinessVouchers />
      </Grid>
    </Grid>
  )
}

export default BusinessDetails
