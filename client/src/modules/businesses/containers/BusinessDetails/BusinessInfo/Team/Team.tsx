import React from 'react'
import styled from 'styled-components'
import { Info } from 'components'
import Heart from './Heart'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InfoWrapper = styled.div`
  margin-right: 14px;
`

interface TeamProps {
  name: string
}

const Team: React.FC<TeamProps> = ({ name }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Info variant="h6" align="right" style={{ fontWeight: 'normal' }}>
          From
        </Info>
        <Info variant="h6" align="right" style={{ fontWeight: 'normal' }}>
          <b style={{ fontWeight: 900 }}>{name} Team</b>&nbsp;with
        </Info>
      </InfoWrapper>
      <Heart />
    </Wrapper>
  )
}

export default Team
