import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Typography, InputAdornment } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Button, CardList } from 'components'
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
// import OrderCompleteModal from './components/OrderCompleteModal'
import {
  GreyText,
  SquareButton,
  RemoveButtonContainer,
  PriceContainer,
  VouchersNumberContainer,
  BonusInput,
  RestrictedButton,
  useStyles,
  MarginBottomContainer,
  FullHeightContainer,
} from './Order.styles'
import OrderCompleteModal from './components/OrderCompleteModal'
import { useHistory } from 'react-router'
import OtherBusinessText from './components/OtherBusinessText'
import BackBusiness from './components/BackBusiness'

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {
  const id = useId()
  const { data: { voucher } = {} } = useQuery<VoucherData>(GET_ORDER, {
    variables: { id },
  })
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const {
    totalBonusPrice,
    submitBonusPrice,
    bonusPriceProps,
    resetBonus,
  } = useBonusPrice()
  const {
    addVoucher,
    removeVoucher,
    vouchersNumber,
    vouchersPrice,
    resetVouchersNumber,
  } = useVouchersNumber(voucher?.promotion || voucher?.price, totalBonusPrice)
  const {
    destinationProps,
    nameProps,
    emailProps,
    noteProps,
    resetForm,
  } = useOrderForm()

  const [
    createOrder,
    // { loading: mutationLoading, error: mutationError, data },
  ] = useMutation<CreateOrder>(CREATE_ORDER, {
    onCompleted: (data: any) => {
      setIsOpen(true)
      resetForm()
      resetBonus()
      resetVouchersNumber()
    },
  })

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OrderCompleteModal
        imageUrl={voucher?.imageUrl}
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
      <FullHeightContainer container spacing={0}>
        <Grid container xs={8} spacing={0}>
          <Grid container direction="column">
            <VoucherDetails voucher={voucher || {}} />
            <Grid container spacing={0} className={classes.orderBusiness}>
              <Grid item xs={1}></Grid>
              <Grid container item xs={11}>
                <Grid item xs={12}>
                  <OtherBusinessText name={voucher?.business?.name} />
                  <Grid item xs={12}>
                    <CardList
                      withHorizontalCards
                      items={voucher?.business?.vouchers || []}
                      onClick={({ id }) => history.push(`/vouchers/${id}`)}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <BackBusiness />
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
        <FullHeightContainer
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
              <Grid item xs={8} container justify="center" alignItems="center">
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
            <MarginBottomContainer item xs={12}>
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
                  })
                }}
              >
                Go to Payment
              </Button>
            </MarginBottomContainer>
          </Grid>
          <Grid container xs={1}></Grid>
        </FullHeightContainer>
      </FullHeightContainer>
    </div>
  )
}

export default Order
