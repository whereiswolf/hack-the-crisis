import React from 'react'
import { Icon, Title, Wrapper } from './TypeLabel.style'

interface TypeLabelProps {
  title?: string
  iconUrl?: string
}

const TypeLabel: React.FC<TypeLabelProps> = ({ title, iconUrl, ...props }) => {
  return (
    <Wrapper {...props}>
      <Icon src={iconUrl} alt="category-icon" />
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default TypeLabel
