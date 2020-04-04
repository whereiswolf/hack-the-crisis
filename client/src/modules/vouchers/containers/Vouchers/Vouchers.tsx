import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { BusinessType } from 'enums'
import VouchersList from './VouchersList'
import Filtering, { Filters } from './Filtering'
import { queries } from './Vouchers.utils'

interface VouchersProps {}

const defaultFilters: Filters = {
  type: BusinessType.Local,
  category: null,
  distance: null,
  location: null,
}

const Vouchers: React.FC<VouchersProps> = () => {
  const { data, refetch } = useQuery(queries.VOUCHERS, {
    variables: defaultFilters,
  })
  return (
    <Grid container>
      <Grid item md={5}>
        <Filtering onFind={refetch} />
      </Grid>
      <Grid item md={7}>
        <VouchersList vouchers={data} />
      </Grid>
    </Grid>
  )
}

export default Vouchers
