import React from 'react'
import { Typography } from '@material-ui/core'
import { GreyText, OtherBusinessContainer } from '../Order.styles'

interface OtherBusinessTextProps {
  name?: string
}

const OtherBusinessText: React.FC<OtherBusinessTextProps> = ({ name }) => {
  return (
    <OtherBusinessContainer item xs={12}>
      <GreyText variant="h6">
        Add other Vouchers from{' '}
        <Typography color="textPrimary" component="span" variant="h6">
          {name}
        </Typography>
      </GreyText>
    </OtherBusinessContainer>
  )
}

export default OtherBusinessText
