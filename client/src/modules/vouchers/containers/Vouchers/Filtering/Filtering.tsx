import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { BusinessType } from 'enums'
import TypePanel from './TypePanel'
import Description from './Description'
import FiltersPanel from './FiltersPanel'
import { Wrapper } from './Filtering.style'

export interface Filters {
  businessType: string | null
  category: string | null
  distance: number | null
  city: string | null
}

interface FilteringProps {
  onFind: (filters: Filters) => any
}

const orNull = ({ category, businessType, city, distance }: Filters) => ({
  category: category || null,
  businessType: businessType || null,
  distance: distance || null,
  city: city || null,
})

const Filtering: React.FC<FilteringProps> = ({ onFind }) => {
  const [type, setType] = useState<string | null>(BusinessType.Local)

  const find = (filters: Omit<Filters, 'businessType'>) =>
    onFind(orNull({ ...filters, businessType: type }))

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
