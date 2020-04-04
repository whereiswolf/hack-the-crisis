import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import strings from 'modules/vouchers/strings'

interface FiltersPanelProps {}

const FiltersPanel: React.FC<FiltersPanelProps> = () => {
  const { t } = useTranslation()
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography color="textPrimary" variant="h5">
          {t(strings.WHAT_ARE_YOU)}
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default FiltersPanel
