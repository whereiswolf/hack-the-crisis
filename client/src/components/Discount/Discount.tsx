import React from 'react'
import { Grid, GridProps } from '@material-ui/core'
import { NewPrice, OldPrice } from './Discount.style'

interface DiscountProps extends GridProps {
  oldPrice: number
  newPrice: number | null
}

const Discount: React.FC<DiscountProps> = ({
  oldPrice,
  newPrice,
  ...props
}) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    {...props}
  >
    {Boolean(newPrice) && (
      <OldPrice color="error" variant="h5">
        € {oldPrice.toFixed(2)}
      </OldPrice>
    )}
    <NewPrice color="textPrimary" variant="h4">
      € {newPrice ? newPrice.toFixed(2) : oldPrice.toFixed(2)}
    </NewPrice>
  </Grid>
)

export default Discount
