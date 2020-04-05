import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'
import { createStyles, makeStyles, Typography } from '@material-ui/core'
import { Voucher } from 'types'

const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    title: {
      color: palette.text.hint,
      fontSize: 15,
      lineHeight: '19px',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 28,
      color: palette.secondary.main,
      fontWeight: 800,
    },
  })

const useStyles = makeStyles(styles)

interface VoucherProps {
  data: Voucher
}

const Component: React.FC<VoucherProps> = ({ data: { price, name } }) => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.title}>{name}</Typography>
      {price !== null && (
        <Typography className={classes.subtitle}>{`€ ${price}`}</Typography>
      )}
    </>
  )
}

export default Component
