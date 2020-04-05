import React from 'react'
import { Grid } from '@material-ui/core'
import Avatar from './Avatar'
import AddressDetails from './AddressDetails'
import RestaurantIcon from './images/restaurantIcon.svg'
import { Rating } from 'components'
import {
  BusinessImage,
  UpperWrapper,
  LowerWrapper,
  Title,
  Content,
  Link,
  TypeLabel,
  RatingWrapper,
  Wrapper,
} from './BusinessCard.style'

interface BusinessCardProps {
  data?: {
    address?: string
    category?: {
      name: string
    }
    imageUrl?: string
    siteUrl?: string
    name?: string
  }
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  data: { address, category, imageUrl, siteUrl, name } = {},
}) => {
  return (
    <Wrapper>
      <Grid container alignItems="center">
        <Avatar url={imageUrl} />
        <Content>
          <UpperWrapper>
            <Title>{name}</Title>
            <AddressDetails address={address} />
          </UpperWrapper>
          <LowerWrapper>
            <RatingWrapper container alignItems="center">
              <TypeLabel title={category?.name} iconUrl={RestaurantIcon} />
              <Rating value={3.5} />
            </RatingWrapper>
            {siteUrl && (
              <Link href={siteUrl} target="_blank">
                {siteUrl}
              </Link>
            )}
          </LowerWrapper>
        </Content>
      </Grid>
      <BusinessImage src={imageUrl} />
    </Wrapper>
  )
}

export default BusinessCard
