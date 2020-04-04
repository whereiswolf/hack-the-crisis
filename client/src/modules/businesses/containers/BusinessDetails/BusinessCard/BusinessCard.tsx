import React from 'react'
import { Grid } from '@material-ui/core'
import Avatar from './Avatar'
import AddressDetails from './AddressDetails'
import RestaurantIcon from './images/restaurantIcon.svg'
import { Rating } from 'components'
import { Business } from 'types'
import {
  BusinessImage,
  UpperWrapper,
  LowerWrapper,
  Title,
  Content,
  Link,
  TypeLabel,
  RatingWrapper,
} from './BusinessCard.style'

interface BusinessCardProps {
  data: Business
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  data: {
    address,
    category: { name: businessMock },
    imageUrl,
    siteUrl,
    name,
  },
}) => {
  return (
    <Grid>
      <Grid container alignItems="center">
        <Avatar url={imageUrl} />
        <Content>
          <UpperWrapper>
            <Title>{name}</Title>
            <AddressDetails address={address} />
          </UpperWrapper>
          <LowerWrapper>
            <RatingWrapper container alignItems="center">
              <TypeLabel title={businessMock} iconUrl={RestaurantIcon} />
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
    </Grid>
  )
}

export default BusinessCard
