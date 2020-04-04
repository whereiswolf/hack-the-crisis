import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { VouchersList } from '../../components'
import Filtering, { Filters } from '../../components/Filtering'
import { queries } from './Home.utils'
import { BusinessType } from 'enums'

interface HomeProps {}

const defaultFilters = {
  type: BusinessType.Local,
  category: null,
  distance: null,
  location: null,
}

const Home: React.FC<HomeProps> = () => {
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

export default Home
