import React from 'react'
import { ButtonBase, Typography, Grid, makeStyles } from '@material-ui/core'
import { Voucher } from 'types'
import styles, { getImageStyles } from './VoucherCard.style'

const useStyles = makeStyles(styles)

interface VoucherCardProps {
  data: Voucher
  onClick?: () => void
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  data: { price, imageUrl, name },
  onClick,
  ...props
}) => {
  const classes = useStyles()
  return (
    <Grid item>
      <ButtonBase onClick={onClick} className={classes.buttonBase}>
        <div className={classes.wrapper} {...props}>
          <div className={classes.image} style={getImageStyles(imageUrl)} />
          <div className={classes.content}>
            <Typography className={classes.title}>{name}</Typography>
            <Typography className={classes.subtitle}>{`€ ${price}`}</Typography>
          </div>
        </div>
      </ButtonBase>
    </Grid>
  )
}

export default VoucherCard
