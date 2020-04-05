import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'
import { Rating } from 'components'
import { createStyles, makeStyles, Typography, Grid } from '@material-ui/core'
import { Business } from 'types'

const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    title: {
      color: palette.text.primary,
      fontSize: 19,
      lineHeight: '24px',
      fontWeight: 900,
      textAlign: 'center',
      marginBottom: 14,
    },
    wrapper: {
      height: 115,
      padding: '8px 24px 16px 24px',
      boxSizing: 'border-box',
    },
  })

const useStyles = makeStyles(styles)

interface VoucherProps {
  data: Business
}

const Component: React.FC<VoucherProps> = ({ data: { name } }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      className={classes.wrapper}
    >
      <Typography className={classes.title}>{name}</Typography>
      <Rating value={3.5} />
    </Grid>
  )
}

export default Component
