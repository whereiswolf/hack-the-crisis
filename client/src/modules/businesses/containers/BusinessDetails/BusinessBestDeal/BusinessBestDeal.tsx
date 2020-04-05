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
  data: Voucher
}

const BusinessBestDeal: React.FC<BusinessBestDealProps> = ({
  data,
  data: {
    name,
    business: {
      category: { name: categoryName },
    },
    price,
    promotion,
  },
}) => (
  <Wrapper container justify="center">
    <Title color="textPrimary" variant="h4">
      Best <em>deal</em>
    </Title>
    <Countdown
      title={'This Voucher ends in:'}
      subtitle={'Hurry up!'}
      date={new Date().setMonth(12)}
    />
    <Card data={data}>
      <CardContent container direction="column" alignItems="flex-start">
        <CardSubtitle>{categoryName}</CardSubtitle>
        <CardTitle>{name}</CardTitle>
      </CardContent>
    </Card>
    <Discount oldPrice={price} newPrice={promotion} />
    <Button variant="contained">Get the best deal!</Button>
  </Wrapper>
)

export default BusinessBestDeal
