import React from 'react'
import { Typography } from '@material-ui/core'
import { BackBusinessContainer } from '../Order.styles'

interface BackBusinessProps {}

const BackBusiness: React.FC<BackBusinessProps> = () => {
  return (
    <BackBusinessContainer item xs={12}>
      <Typography variant="h5" color="textPrimary">
        Back this{' '}
        <Typography color="secondary" component="span" variant="h5">
          business
        </Typography>
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Do you want to show some extra love ? Pick the price and add it to the
        total amount of your current Voucher order.
      </Typography>
      <br />
    </BackBusinessContainer>
  )
}

export default BackBusiness
