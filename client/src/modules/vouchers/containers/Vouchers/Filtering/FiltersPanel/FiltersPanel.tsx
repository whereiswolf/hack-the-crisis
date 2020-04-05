import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import strings from 'modules/vouchers/strings'
import { Select, TextInput, Button } from 'components'
import { useCategories, distances } from './FiltersPanel.utils'

interface Filters {
  category: string | null
  distance: number | null
  city: string | null
}

interface FiltersPanelProps {
  onFind: (filters: Filters) => any
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({ onFind }) => {
  const { t } = useTranslation()
  const categories = useCategories()
  const [category, setCategory] = useState<string>('')
  const [distance, setDistance] = useState<number>(0)
  const [city, setCity] = useState<string>('')

  const find = (): Filters => onFind({ category, distance, city })

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          {t(strings.WHAT_ARE_YOU)}
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={6}>
          <Select
            name="category"
            placeholder="Business Type"
            options={categories}
            onChange={setCategory as (c: string | number) => any}
          />
        </Grid>
        <Grid item md={6}>
          <Select
            name="distance"
            placeholder="Distance"
            options={distances}
            onChange={setDistance as (d: string | number) => any}
          />
        </Grid>
        <Grid item md={9}>
          <TextInput
            name="location"
            placeholder="Location"
            value={city}
            onChange={setCity as (l: React.ReactText) => any}
          />
        </Grid>
        <Grid item container md={3} justify="flex-end">
          <Button fullWidth onClick={find}>
            Find
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FiltersPanel
