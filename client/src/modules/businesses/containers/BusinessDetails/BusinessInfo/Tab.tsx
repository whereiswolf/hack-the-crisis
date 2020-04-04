import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { Tab as ITab } from './Tabs'

interface TabProps {
  tab: ITab
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Tab: React.FC<TabProps> = ({ tab: { title, content } }) => (
  <Wrapper>
    <Typography color="textSecondary" variant="h5">
      {title}
    </Typography>
    <br />
    <Typography
      color="textSecondary"
      variant="body1"
      style={{ whiteSpace: 'pre-wrap' }}
    >
      {content}
    </Typography>
  </Wrapper>
)

export default Tab
