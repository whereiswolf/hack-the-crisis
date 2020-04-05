import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Typography, InputAdornment } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Button } from 'components'
import {
  GET_ORDER,
  useVouchersNumber,
  destinationOptions,
  useOrderForm,
  useBonusPrice,
  CREATE_ORDER,
  CreateOrder,
} from './Order.utils'
import { VoucherData } from 'types'
import { useId } from 'utils'
import Select from 'components/Select'
import TextInput from 'components/TextInput'
import VoucherDetails from './components/VoucherDetails'
import {
  GreyText,
  SquareButton,
  RemoveButtonContainer,
  PriceContainer,
  VouchersNumberContainer,
  BonusInput,
  RestrictedButton,
  useStyles,
} from './Order.styles'

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {
  const id = useId()
  const { data: { voucher } = {} } = useQuery<VoucherData>(GET_ORDER, {
    variables: { id },
  })

  const { totalBonusPrice, submitBonusPrice, bonusPriceProps } = useBonusPrice()
  const {
    addVoucher,
    removeVoucher,
    vouchersNumber,
    vouchersPrice,
  } = useVouchersNumber(voucher?.promotion || voucher?.price, totalBonusPrice)
  const { destinationProps, nameProps, emailProps, noteProps } = useOrderForm()

  const [
    createOrder,
    // { loading: mutationLoading, error: mutationError, data },
  ] = useMutation<CreateOrder>(CREATE_ORDER)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container xs={8} spacing={0}>
          <Grid container direction="column">
            <VoucherDetails voucher={voucher || {}} />
            <Grid container spacing={0} className={classes.orderBusiness}>
              <Grid item xs={1}></Grid>
              <Grid container item xs={11}>
                <Grid item xs={12}>
                  <GreyText variant="h6">
                    Add other Vouchers from{' '}
                    <Typography
                      color="textPrimary"
                      component="span"
                      variant="h6"
                    >
                      {voucher?.business?.name}
                    </Typography>
                  </GreyText>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Typography variant="h5" color="textPrimary">
                      Back this{' '}
                      <Typography
                        color="secondary"
                        component="span"
                        variant="h5"
                      >
                        business
                      </Typography>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Do you want to show some extra love ? Pick the price and
                      add it to the total amount of your current Voucher order.
                    </Typography>
                    <br />
                  </Grid>
                  <BonusInput
                    {...bonusPriceProps}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">€</InputAdornment>
                      ),
                    }}
                  />

                  <RestrictedButton
                    onClick={() => submitBonusPrice()}
                    variant="outlined"
                  >
                    Add to amount
                  </RestrictedButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          xs={4}
          className={classes.orderConfig}
          justify="center"
          alignItems="center"
        >
          <Grid container xs={1}></Grid>
          <Grid container xs={10} spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" color="textPrimary">
                Complete Your{' '}
                <Typography color="secondary" component="span" variant="h4">
                  order
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textSecondary">
                {voucher?.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <GreyText variant="h6">Fill the fields below</GreyText>
            </Grid>
            <Grid item xs={12}>
              <Select options={destinationOptions} {...destinationProps} />
            </Grid>
            <Grid item xs={12}>
              <TextInput {...nameProps} />
            </Grid>
            <Grid item xs={12}>
              <TextInput {...emailProps} />
            </Grid>
            {noteProps && (
              <Grid item xs={12}>
                <TextInput {...noteProps} />
              </Grid>
            )}
            <VouchersNumberContainer container xs={12} justify="space-between">
              <RemoveButtonContainer item xs={2}>
                <SquareButton onClick={removeVoucher} color="secondary">
                  -
                </SquareButton>
              </RemoveButtonContainer>
              <Grid item xs={8}>
                <Typography variant="h6" color="textPrimary">
                  Buy {vouchersNumber} Vouchers
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <SquareButton onClick={addVoucher} color="secondary">
                  +
                </SquareButton>
              </Grid>
            </VouchersNumberContainer>
            <Grid item xs={12}>
              <GreyText variant="h5">Total Amount</GreyText>
            </Grid>
            <PriceContainer item xs={12}>
              <Typography variant="h4" color="textPrimary">
                € {vouchersPrice}
              </Typography>
            </PriceContainer>
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={() => {
                  createOrder({
                    variables: {
                      email: emailProps.value,
                      name: nameProps.value,
                      count: vouchersNumber,
                      voucherId: id,
                    },
                    // onCompleted: (data: CreateOrder) => {},
                  })
                }}
              >
                Go to Payment
              </Button>
            </Grid>
          </Grid>
          <Grid container xs={1}></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
