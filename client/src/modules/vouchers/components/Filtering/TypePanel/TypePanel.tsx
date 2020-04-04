import React from 'react'
import { BusinessType } from 'enums'
import { Grid, Button } from '@material-ui/core'
import globalStrings from 'strings'
import { useTranslation } from 'react-i18next'

interface TypePanelProps {
  type: BusinessType | null
  onTypeChange: (type: BusinessType) => any
}

const types = [
  {
    value: BusinessType.All,
    label: `${globalStrings.BUSINESS_TYPE}${BusinessType.All}`,
  },
  {
    value: BusinessType.Local,
    label: `${globalStrings.BUSINESS_TYPE}${BusinessType.Local}`,
  },
  {
    value: BusinessType.Online,
    label: `${globalStrings.BUSINESS_TYPE}${BusinessType.Online}`,
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
