import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { queries } from './VouchersList.utils'
import { Card, WithAccent } from 'components'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { VoucherData } from 'types'

interface VouchersListProps {
  vouchers?: any[]
}

const SpecialOffer = styled(Grid)`
  border-radius: 18px;
  background: ${(p) => p.theme.palette.primary.main};
  margin: 0 !important;
`

const pickRandomElements = (array: any[], n: number) => {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, n)
}

const VouchersList: React.FC<VouchersListProps> = ({ vouchers = [] }) => {
  const { data = { vouchers: [] } } = useQuery(queries.VOUCHERS)
  const { vouchers: allVouchers } = data
  const bestVouchers = pickRandomElements(vouchers, 3)
  const specialVouchers = pickRandomElements(vouchers, 4)
  const history = useHistory()
  return (
    <Grid
      container
      direction="column"
      style={{ padding: '40px 100px' }}
      spacing={10}
    >
      <Grid item container direction="row" spacing={2}>
        <Grid item md={5}>
          <Typography color="textPrimary" variant="h5">
            Best Vouchers for you
          </Typography>
          <br />
          <Typography color="textSecondary" variant="body1">
            Exercitation sint amet deserunt non id officia tempor reprehenderit
            sunt do ad irure sit nostrud. Quis enim Lorem incididunt eiusmod
            occaecat ut laboris esse minim fugiat qui qui dolor. Deserunt ipsum
            tempor labore deserunt anim laboris do veniam sint. Reprehenderit
            pariatur cillum eiusmod pariatur. Sit veniam ipsum eiusmod tempor
            sit id reprehenderit.
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={7}
          spacing={4}
          style={{ overflowX: 'auto', flexWrap: 'nowrap' }}
        >
          {bestVouchers.map((voucher) => (
            <Card
              data={voucher}
              onClick={() => history.push(`/vouchers/${voucher.id}`)}
            />
          ))}
        </Grid>
      </Grid>
      <SpecialOffer item container spacing={4} direction="column">
        <Grid item>
          <WithAccent align="center" color="textPrimary" variant="h4">
            Our special <em>Vouchers</em>
          </WithAccent>
        </Grid>
        <Grid
          item
          container
          direction="row"
          spacing={4}
          justify="center"
          alignItems="center"
        >
          {specialVouchers.map((voucher) => (
            <Card
              light
              data={voucher}
              onClick={() => history.push(`/vouchers/${voucher.id}`)}
            />
          ))}
        </Grid>
      </SpecialOffer>
      <Grid item container direction="column" spacing={4}>
        <Grid item>
          <Typography align="center" color="textPrimary" variant="h4">
            Other Vouchers
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          {allVouchers.slice(0, 10).map((voucher: any) => (
            <Card
              data={voucher}
              onClick={() => history.push(`/vouchers/${voucher.id}`)}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VouchersList
