import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Avatar, Typography, Button as BaseButton } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Button } from 'components'
import {
  GET_ORDER,
  useVouchersNumber,
  destinationOptions,
  useOrderForm,
} from './Order.utils'
import { VoucherData } from 'types'
import { useId } from 'utils'
import { colors } from 'config'
import styled from 'styled-components'
import Select from 'components/Select'
import TextInput from 'components/TextInput'
// import AddIcon from '@material-ui/icons/Add'

const GreyText = styled(Typography)`
  color: ${colors.primary[50]};
`
const SquareButton = styled(BaseButton)`
  background-color: ${colors.primary[55]} !important;
  width: 42px;
  height: 42px;
  min-width: 0 !important;
  padding: 0 !important;
  > span {
    padding: 0 !important;
    font-size: 24px !important;
  }
`

const RemoveButtonContainer = styled(Grid)`
  > button > span {
    color: #fe3f59 !important;
  }
`

const PriceContainer = styled(Grid)`
  margin-top: -25px !important;
  margin-bottom: 25px !important;
`

const VouchersNumberContainer = styled(Grid)`
  margin-top: 15px !important;
  margin-bottom: 15px !important;
  > div:nth-child(2) {
    border-radius: 5px;
    padding: 2px;
    background-color: ${colors.primary[55]} !important;
  }
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#000',
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    orderConfig: {
      textAlign: 'center',
      height: '90vh',
      background: theme.palette.primary.main,
    },
    orderInfo: {
      height: '500px',
    },
    orderBusiness: {
      flex: '1 1 auto',
      background: '#161616',
    },
    orderImg: {
      height: '380px',
      width: '380px',
    },
  })
)

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {
  const id = useId()
  const { data } = useQuery<VoucherData>(GET_ORDER, {
    variables: { id },
  })
  const {
    addVoucher,
    removeVoucher,
    vouchersNumber,
    vouchersPrice,
  } = useVouchersNumber(data?.voucher?.price)
  const { destinationProps, nameProps, emailProps, noteProps } = useOrderForm()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container xs={8} spacing={0}>
          <Grid container direction="column">
            <Grid
              container
              spacing={0}
              className={classes.orderInfo}
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                item
                xs={6}
                spacing={1}
                justify="center"
                alignItems="center"
              >
                <Avatar
                  className={classes.orderImg}
                  alt="order-image"
                  src={data?.voucher?.imageUrl}
                />
              </Grid>
              <Grid item xs={6} spacing={1}>
                <Typography variant="h4" color="textPrimary">
                  {data?.voucher?.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.orderBusiness}>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <Grid item xs={12}>
                  <GreyText variant="h6">
                    Add other Vouchers from{' '}
                    <Typography
                      color="textPrimary"
                      component="span"
                      variant="h6"
                    >
                      {data?.voucher?.business?.name}
                    </Typography>
                  </GreyText>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" color="textPrimary">
                    Back this{' '}
                    <Typography color="secondary" component="span" variant="h5">
                      business
                    </Typography>
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body1" color="textSecondary">
                    Do you want to show some extra love ? Pick the price and add
                    it to the total amount of your current Voucher order.
                  </Typography>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
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
              <Button variant="contained">Go to Payment</Button>
            </Grid>
          </Grid>
          <Grid container xs={1}></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
