import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router'
import { CardList } from 'components'
import { queries } from 'modules/vouchers/containers/Vouchers/Vouchers.utils'
import {
  CardListWrapper,
  Title,
  SubTitle,
  Image,
  VouchersWrapper,
  useStyles,
} from './Home.style'
import DemoImage from './demo.png'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { data = { vouchers: [] } } = useQuery(queries.VOUCHERS)
  const { vouchers } = data
  const slicedVouchers = vouchers.slice(0, 3)
  const history = useHistory()
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item md={7} className={classes.left}>
        <Title color="textPrimary" variant="h2">
          One platform to support <em>businesses</em> in need
        </Title>
        <VouchersWrapper>
          <SubTitle color="textPrimary" variant="h5">
            Find best Vouchers for you
          </SubTitle>
          <CardListWrapper>
            <CardList
              items={slicedVouchers}
              onClick={({ id }) => history.push(`/vouchers/${id}`)}
            />
          </CardListWrapper>
        </VouchersWrapper>
      </Grid>
      <Grid item md={5} className={classes.right}>
        <Image src={DemoImage}></Image>
      </Grid>
    </Grid>
  )
}

export default Home
