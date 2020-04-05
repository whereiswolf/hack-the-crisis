import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Select, TextInput, Button } from 'components'
import { useCategories, types } from './FiltersPanel.utils'
import SupportLevelPanel from '../SupportLevelPanel'

interface Filters {
  category: string | null
  businessType: string | null
  name: string | null
  supportLevel: number | null
}

interface FiltersPanelProps {
  onFind: (filters: Filters) => any
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({ onFind }) => {
  const categories = useCategories()
  const [category, setCategory] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [supportLevel, setSupportLevel] = useState<number>(0)

  const find = (): Filters =>
    onFind({ category, businessType: type, name, supportLevel })

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          Let us help you
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item md={6}>
          <Select
            name="category"
            placeholder="Business Category"
            options={categories}
            onChange={setCategory as (c: string | number) => any}
          />
        </Grid>
        <Grid item md={6}>
          <Select
            name="type"
            placeholder="Type of service"
            options={types}
            onChange={setType as (d: string | number) => any}
          />
        </Grid>
        <Grid item md={9}>
          <TextInput
            name="name"
            placeholder="Find business by name"
            value={name}
            onChange={setName as (l: React.ReactText) => any}
          />
        </Grid>
        <Grid item container md={3} justify="flex-end">
          <Button fullWidth onClick={find}>
            Find
          </Button>
        </Grid>
        <Grid item container direction="column">
          <br />
          <Typography variant="h6" color="textPrimary">
            Find by support level
          </Typography>
          <br />
          <SupportLevelPanel level={supportLevel} onChange={setSupportLevel} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FiltersPanel
