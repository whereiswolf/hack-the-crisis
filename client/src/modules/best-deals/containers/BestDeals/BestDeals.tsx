import React from 'react'
import { Grid } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import BusinessBestDeal from './BusinessBestDeal'
import { GET_VOUCHERS } from './BestDeals.utils'
import { VouchersForYouData } from 'types'
import { Wrapper, Title } from './BestDeals.style'

interface BusinessDetailsProps {}

const BestDeals: React.FC<BusinessDetailsProps> = () => {
  const { data: { vouchersForYou } = {} } = useQuery<VouchersForYouData>(
    GET_VOUCHERS,
    {}
  )
  return (
    <Wrapper container>
      <Grid xs={12} container justify="center" alignItems="center">
        <Title color="textPrimary" variant="h2">
          Get the <em>best</em> deals
        </Title>
      </Grid>
      {vouchersForYou?.map((item, index) => (
        <Grid item xs={4} key={`best-deal-${index}`}>
          <BusinessBestDeal category={item.business.category} voucher={item} />
        </Grid>
      ))}
    </Wrapper>
  )
}

export default BestDeals
