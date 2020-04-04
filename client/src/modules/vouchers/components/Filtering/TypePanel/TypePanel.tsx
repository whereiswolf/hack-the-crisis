import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import BusinessType, { BusinessTypeTranslation } from 'enums/BusinessType'

interface TypePanelProps {
  type: BusinessType | null
  onTypeChange: (type: BusinessType) => any
}

const types = [
  {
    value: BusinessType.All,
    label: BusinessTypeTranslation.All,
  },
  {
    value: BusinessType.Local,
    label: BusinessTypeTranslation.Local,
  },
  {
    value: BusinessType.Online,
    label: BusinessTypeTranslation.Online,
  },
]

const TypePanel: React.FC<TypePanelProps> = ({ type, onTypeChange }) => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={2}>
      {types.map(({ value, label }) => (
        <Grid item key={label}>
          <Button
            variant="contained"
            onClick={() => onTypeChange(value)}
            color={type === value ? 'secondary' : 'primary'}
          >
            {t(label)}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
}

export default TypePanel
