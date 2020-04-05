import React from 'react'
import {
  Typography,
  Grid,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { Discount, Countdown, Badge } from 'components'
import { Tag } from 'types'
import styled from 'styled-components'

const BadgeContainer = styled(Grid)`
  > div {
    margin-right: 15px;
  }
`

const VoucherNameContainer = styled(Grid)`
  margin-bottom: 22px !important;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    orderInfo: {
      height: '360px',
    },
    orderImg: {
      height: '300px',
      width: '300px',
    },
  })
)

interface VoucherDetailsProps {
  voucher?: {
    tags?: Tag[]
    name?: string
    expirationDate?: string
    imageUrl?: string
    price?: number
    promotion?: number
  }
}

const VoucherDetails: React.FC<VoucherDetailsProps> = ({
  voucher: { tags = [], name, expirationDate, imageUrl, price, promotion } = {},
}) => {
  const classes = useStyles()
  return (
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
        xs={5}
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Avatar className={classes.orderImg} alt="order-image" src={imageUrl} />
      </Grid>
      <Grid
        container
        xs={7}
        direction="column"
        justify="space-between"
        spacing={1}
      >
        <BadgeContainer item xs={12}>
          {tags && tags.map((tag, i) => <Badge key={i}>{tag.name}</Badge>)}
        </BadgeContainer>
        <VoucherNameContainer item xs={12}>
          <Typography variant="h4" color="textPrimary">
            {name}
          </Typography>
        </VoucherNameContainer>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <Discount
              oldPrice={price || 0}
              newPrice={promotion || 0}
              alignItems="flex-start"
            />
          </Grid>
          <Grid item xs={6}>
            <Countdown
              title={'Ends in'}
              date={new Date(expirationDate || new Date())}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VoucherDetails
