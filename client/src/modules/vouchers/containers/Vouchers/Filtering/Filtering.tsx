import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { BusinessType } from 'enums'
import TypePanel from './TypePanel'
import Description from './Description'
import FiltersPanel from './FiltersPanel'
import { Wrapper } from './Filtering.style'

export interface Filters {
  type: string | null
  category: string | null
  distance: number | null
  location: string | null
}

interface FilteringProps {
  onFind: (filters: Filters) => any
}

const Filtering: React.FC<FilteringProps> = ({ onFind }) => {
  const [type, setType] = useState<string | null>(BusinessType.Local)

  const find = (filters: Omit<Filters, 'type'>) => onFind({ ...filters, type })

  return (
    <Wrapper>
      <Grid container direction="column" justify="center" spacing={10}>
        <Grid item container direction="column" justify="center" spacing={2}>
          <Grid item>
            <TypePanel type={type} onTypeChange={setType} />
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
