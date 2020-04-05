import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import BusinessType, { BusinessTypeTranslation } from 'enums/BusinessType'

interface SupportLevelPanelProps {
  level: number | null
  onChange: (level: number) => any
}

const types = [
  {
    value: 0,
    label: 'Unsupported',
  },
  {
    value: 1,
    label: '5-40%',
  },
  {
    value: 2,
    label: '40-75%',
  },
  {
    value: 3,
    label: 'Over 75%',
  },
]

const SupportLevelPanel: React.FC<SupportLevelPanelProps> = ({
  level,
  onChange,
}) => (
  <Grid container spacing={2}>
    {types.map(({ value, label }) => (
      <Grid item key={label}>
        <Button
          variant="contained"
          onClick={() => onChange(value)}
          color={level === value ? 'secondary' : 'primary'}
        >
          {label}
        </Button>
      </Grid>
    ))}
  </Grid>
)

export default SupportLevelPanel
