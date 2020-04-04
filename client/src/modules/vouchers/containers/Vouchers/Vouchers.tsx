import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { VouchersList } from 'modules/vouchers/components'
import Filtering, { Filters } from 'modules/vouchers/components/Filtering'
import { queries } from './Vouchers.utils'
import { BusinessType } from 'enums'

interface VouchersProps {}

const defaultFilters = {
  type: BusinessType.Local,
  category: null,
  distance: null,
  location: null,
}

const Vouchers: React.FC<VouchersProps> = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const { data } = useQuery(queries.VOUCHERS, { variables: filters })

  return (
    <Grid container>
      <Grid item md={5}>
        <Filtering filters={filters} onFiltersChange={setFilters} />
      </Grid>
      <Grid item md={7}>
        <VouchersList vouchers={data} />
      </Grid>
    </Grid>
  )
}

export default Vouchers
