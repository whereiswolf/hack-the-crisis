import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const BadgeWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 7px;
  display: inline-block;
  background: ${(p) => p.theme.palette.primary.light};
`
interface BadgeProps {
  style?: any
}

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => (
  <BadgeWrapper {...props}>
    <Typography color="textPrimary" variant="h6">
      {children}
    </Typography>
  </BadgeWrapper>
)

export default Badge
