import React from 'react'
import styled from 'styled-components'
import { Typography, Button, Grid } from '@material-ui/core'
import { Tab as ITab } from './Tabs'

interface ToolbarProps {
  currentTab: ITab
  tabs: ITab[]
  onTabClick: (tab: ITab) => any
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 3px solid ${(p) => p.theme.palette.primary.light};
`

const Toolbar: React.FC<ToolbarProps> = ({ currentTab, tabs, onTabClick }) => (
  <Wrapper>
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography color="secondary" variant="body1">
          <b style={{ fontWeight: 900 }}>{currentTab.name}</b>
        </Typography>
      </Grid>
      <Grid item>
        {tabs.map((tab, i) => (
          <Button key={tab.name} onClick={() => onTabClick(tab)}>
            {tab.name}
          </Button>
        ))}
      </Grid>
    </Grid>
  </Wrapper>
)

export default Toolbar
