import React from 'react'
import { Grid } from '@material-ui/core'
import TypePanel from './TypePanel'
import FiltersPanel from './FiltersPanel'

interface Location {
  lat: number
  lng: number
}

export interface Filters {
  category: string
  type: string
  distance: number
  location: Location
}

interface FilteringProps {
  filters?: Filters
  onFiltersChange?: (filters: Filters) => any
}

const Filtering: React.FC<FilteringProps> = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <TypePanel />
      </Grid>
      <Grid item>
        <FiltersPanel />
      </Grid>
    </Grid>
  )
}

export default Filtering
