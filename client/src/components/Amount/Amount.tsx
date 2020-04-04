import React from 'react'
import { Typography, Grid, TypographyProps, GridProps } from '@material-ui/core'
import Info from '../Info'

interface AmountProps extends Omit<TypographyProps, 'title'> {
  title?: string | JSX.Element
  value?: string | number | JSX.Element
  gridProps?: GridProps
  withoutCurrency?: boolean
}

const Amount: React.FC<AmountProps> = ({
  title,
  gridProps,
  value,
  children,
  withoutCurrency,
  ...props
}) => (
  <Grid container direction="column" style={{ padding: 8 }} {...gridProps}>
    <Grid item>
      <Info variant="body1">{title}</Info>
    </Grid>
    <Grid item>
      <Typography color="textPrimary" variant="h5" {...props}>
        {withoutCurrency ? '' : '€'} {children || value}
      </Typography>
    </Grid>
  </Grid>
)

export default Amount
