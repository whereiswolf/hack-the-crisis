import React from 'react'
import {
  Button,
  Wrapper,
  Discount,
  Countdown,
  Card,
  CardContent,
  CardSubtitle,
  CardTitle,
} from './BusinessBestDeal.style'
import { useHistory } from 'react-router'
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
}) => {
  const history = useHistory()
  return (
    <Wrapper container justify="center">
      <Countdown
        title={'This Voucher ends in:'}
        subtitle={'Hurry up!'}
        date={
          voucher && voucher.expirationDate
            ? new Date(voucher.expirationDate)
            : new Date()
        }
      />
      <Card
        data={voucher}
        onClick={() => history.push(`/vouchers/${voucher?.id}`)}
      >
        <CardContent container direction="column" alignItems="flex-start">
          <CardSubtitle>{category?.name}</CardSubtitle>
          <CardTitle>{voucher?.name}</CardTitle>
        </CardContent>
      </Card>
      <Discount
        oldPrice={voucher?.price || 0}
        newPrice={voucher?.promotion || 0}
      />
      <Button
        variant="contained"
        onClick={() => history.push(`/vouchers/${voucher?.id}`)}
      >
        Get this deal!
      </Button>
    </Wrapper>
  )
}

export default BusinessBestDeal
