import React from 'react'
import PinIcon from '../images/pin.svg'
import { Icon, IconContainer, Wrapper, Title } from './AddressDetails.style'

interface AddressDetailsProps {
  address: string
}

const AddressDetails: React.FC<AddressDetailsProps> = ({ address }) => {
  return (
    <Wrapper>
      <IconContainer>
        <Icon src={PinIcon} alt="pin" />
      </IconContainer>
      <Title>{address}</Title>
    </Wrapper>
  )
}

export default AddressDetails
