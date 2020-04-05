import React, { useState } from 'react'
import { Box, Title, CheckBoxWrapper, Tick } from './Checkbox.style'

interface CheckBoxProps {
  checked?: boolean
  title?: string
  onClick?: () => void
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  title = '',
  onClick,
  children,
  ...props
}) => {
  const [isComponentChecked, setIsComponentChecked] = useState(false)
  const showTick = checked !== undefined ? checked : isComponentChecked
  const handleClick = () => {
    setIsComponentChecked(!isComponentChecked)
    if (onClick) onClick()
  }
  return (
    <CheckBoxWrapper {...props} onClick={handleClick}>
      <Box>{showTick && <Tick />}</Box>
      {children ? <div>{children}</div> : <Title>{title}</Title>}
    </CheckBoxWrapper>
  )
}

export default CheckBox
