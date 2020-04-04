import React from 'react'
import { Grid } from '@material-ui/core'
import { BusinessType } from 'enums'
import TypePanel from './TypePanel'
import Description from './Description'
import FiltersPanel from './FiltersPanel'
import { Wrapper } from './Filtering.style'

interface Location {
  lat: number
  lng: number
}

export interface Filters {
  category: string | null
  type: BusinessType | null
  distance: number | null
  location: Location | null
}

interface FilteringProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => any
}

const Filtering: React.FC<FilteringProps> = ({ filters, onFiltersChange }) => {
  const onTypeChange = (type: BusinessType) =>
    onFiltersChange({ ...filters, type })

  return (
    <Wrapper>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item>
          <TypePanel type={filters.type} onTypeChange={onTypeChange} />
        </Grid>
        <Grid item>
          <Description />
        </Grid>
        <Grid item>
          <FiltersPanel />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Filtering
