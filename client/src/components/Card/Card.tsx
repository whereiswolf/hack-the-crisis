import React from 'react'
import { ButtonBase, Grid, makeStyles } from '@material-ui/core'
import { Voucher as VoucherType, Business as BusinessType } from 'types'
import Voucher from './Voucher'
import Business from './Business'
import Progress from './Progress'
import styles, { getImageStyles } from './Card.style'

const useStyles = makeStyles(styles)

interface CardProps {
  data: VoucherType | BusinessType
  type?: 'voucher' | 'business'
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  data,
  data: { imageUrl },
  type = 'voucher',
  onClick,
  children,
  ...props
}) => {
  const classes = useStyles()
  const isVoucher = type === 'voucher'
  const Component = () =>
    isVoucher ? (
      <Voucher data={data as VoucherType} />
    ) : (
      <Business data={data as BusinessType} />
    )
  return (
    <Grid item>
      <ButtonBase onClick={onClick} className={classes.buttonBase}>
        <div className={classes.wrapper} {...props}>
          <div className={classes.image} style={getImageStyles(imageUrl)}>
            {!isVoucher && (
              <Progress
                data={{ amount: (data as BusinessType).amount, percentage: 10 }}
              />
            )}
          </div>
          <div className={classes.content}>{children || <Component />}</div>
        </div>
      </ButtonBase>
    </Grid>
  )
}

export default Card
