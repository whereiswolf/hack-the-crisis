import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, Avatar, Typography } from '@material-ui/core'
import strings from '../strings'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

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
      height: '100vh',
      background: '#1B1B1B',
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

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {
  // const { loading, error } = useQuery(EXCHANGE_RATES)
  // const { t } = useTranslation()
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
                  src="https://media-cdn.tripadvisor.com/media/photo-s/12/30/6c/eb/img-20180227-wa0016-largejpg.jpg"
                />
              </Grid>
              <Grid item xs={6} spacing={1}>
                <Typography variant="h4" component="h4" color="textPrimary">
                  Special 1-hour sushi lesson (online)
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.orderBusiness}>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <Typography variant="h5" component="h5" color="textPrimary">
                  Add other Vouchers from BingoBong Sushi
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={4}
          className={classes.orderConfig}
          justify="center"
          alignItems="center"
        >
          <Typography variant="h4" component="h4" color="textPrimary">
            Complete Your order
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Fill the fields below
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Order
