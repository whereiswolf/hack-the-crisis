import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { VouchersList } from 'modules/home/components'
import Filtering, { Filters } from 'modules/home/components/Filtering'
import { queries } from './Home.utils'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [filters, setFilters] = useState<Filters>()
  const { data } = useQuery(queries.VOUCHERS, { variables: filters })
  return (
    <Grid container>
      <Grid item md={6}>
        <Filtering filters={filters} onFiltersChange={setFilters} />
      </Grid>
      <Grid item md={6}>
        <VouchersList vouchers={data} />
      </Grid>
    </Grid>
  )
}

export default Home
