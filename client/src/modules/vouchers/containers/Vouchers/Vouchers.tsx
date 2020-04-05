import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { BusinessType } from 'enums'
import Filtering, { Filters } from './Filtering'
import { CardList } from 'components'
import { useHistory } from 'react-router'
import { queries } from './Vouchers.utils'
import { CardListWrapper } from './Vouchers.style'

interface VouchersProps {}

const defaultFilters: Filters = {
  type: BusinessType.Local,
  category: null,
  distance: null,
  location: null,
}

const Vouchers: React.FC<VouchersProps> = () => {
  const { data = { vouchers: [] }, refetch } = useQuery(queries.VOUCHERS, {
    variables: defaultFilters,
  })
  const { vouchers } = data
  const history = useHistory()
  return (
    <Grid container>
      <Grid item md={5}>
        <Filtering onFind={refetch} />
      </Grid>
      <Grid item md={7}>
        <CardListWrapper>
          <CardList
            items={vouchers}
            onClick={({ id }) => history.push(`/vouchers/${id}`)}
          />
        </CardListWrapper>
      </Grid>
    </Grid>
  )
}

export default Vouchers
