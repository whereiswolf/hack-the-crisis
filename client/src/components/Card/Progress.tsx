import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React from 'react'
import { Rating } from 'components'
import { createStyles, makeStyles, Typography, Grid } from '@material-ui/core'
import { Business } from 'types'

const styles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    wrapper: {
      height: 50,
      width: 190,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: palette.primary.main,
      padding: '15px 25px',
      boxSizing: 'border-box',
      borderRadius: 100,
      whiteSpace: 'nowrap',
    },
    title: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '21px',
      color: palette.text.secondary,
      '& > span': {
        fontWeight: 800,
        color: palette.text.primary,
        marginRight: 4,
      },
      '& > em': {
        marginLeft: 4,
        fontWeight: 800,
        fontStyle: 'normal',
        color: palette.secondary.main,
      },
    },
  })

const useStyles = makeStyles(styles)

interface VoucherProps {
  data: {
    amount: number
    percentage: number
  }
}

const Component: React.FC<VoucherProps> = ({
  data: { percentage, amount },
}) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title}>
        <span>{`${percentage}%`}</span>
        from
        <em>{`€ ${amount}`}</em>
      </Typography>
    </div>
  )
}

export default Component
