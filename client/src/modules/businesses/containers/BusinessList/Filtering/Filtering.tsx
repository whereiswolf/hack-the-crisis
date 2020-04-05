import React from 'react'
import { Grid } from '@material-ui/core'
import MapSwitch from './MapSwitch'
import Description from './Description'
import FiltersPanel from './FiltersPanel'
import { Wrapper } from './Filtering.style'
import { ListType } from 'types'

export interface Filters {
  businessType: string | null
  category: string | null
  name: string | null
}

interface FilteringProps {
  onFind: (filters: Filters) => any
  onListTypeChange: (type: ListType) => any
  listType: ListType
}

const orNull = ({ category, businessType, name }: Filters) => ({
  category: category || null,
  businessType: businessType || null,
  name: name || null,
})

const Filtering: React.FC<FilteringProps> = ({
  onFind,
  onListTypeChange,
  listType,
}) => {
  const find = (filters: Filters) => onFind(orNull(filters))

  return (
    <Wrapper>
      <Grid container direction="column" justify="center" spacing={10}>
        <Grid item container direction="column" justify="center" spacing={2}>
          <Grid item>
            <MapSwitch listType={listType} onChange={onListTypeChange} />
          </Grid>
          <Grid item>
            <Description />
          </Grid>
        </Grid>
        <Grid item>
          <FiltersPanel onFind={find} />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Filtering
