import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { ListType } from 'types'

interface MapSwitchProps {
  onChange: (type: ListType) => any
  listType: ListType
}

const types: { value: ListType; label: string }[] = [
  {
    value: 'list',
    label: 'List',
  },
  {
    value: 'map',
    label: 'Business map',
  },
]

const MapSwitch: React.FC<MapSwitchProps> = ({ listType, onChange }) => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={2}>
      {types.map(({ value, label }) => (
        <Grid item key={label}>
          <Button
            variant="contained"
            color={listType === value ? 'secondary' : 'primary'}
            onClick={() => onChange(value)}
          >
            {t(label)}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default MapSwitch
