import React from 'react'
import {
  Title,
  Button,
  Wrapper,
  Discount,
  Countdown,
  Card,
  CardContent,
  CardSubtitle,
  CardTitle,
} from './BusinessBestDeal.style'
import { Voucher } from 'types'

interface BusinessBestDealProps {
  category?: {
    name: string
  }
  voucher?: Voucher
}

const BusinessBestDeal: React.FC<BusinessBestDealProps> = ({
  category,
  voucher,
} = {}) => (
  <Wrapper container justify="center">
    <Title color="textPrimary" variant="h4">
      Best <em>deal</em>
    </Title>
    <Countdown
      title={'This Voucher ends in:'}
      subtitle={'Hurry up!'}
      date={new Date().setMonth(12)}
    />
    <Card data={voucher}>
      <CardContent container direction="column" alignItems="flex-start">
        <CardSubtitle>{category?.name}</CardSubtitle>
        <CardTitle>{voucher?.name}</CardTitle>
      </CardContent>
    </Card>
    <Discount
      oldPrice={voucher?.price || 0}
      newPrice={voucher?.promotion || 0}
    />
    <Button variant="contained">Get the best deal!</Button>
  </Wrapper>
)

export default BusinessBestDeal
