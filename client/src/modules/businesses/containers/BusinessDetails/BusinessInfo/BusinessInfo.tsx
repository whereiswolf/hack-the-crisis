import React, { useState } from 'react'
import { Amount, Button } from 'components'
import Tab from './Tab'
import Toolbar from './Toolbar'
import tabs, { Tab as ITab } from './Tabs'
import Progress from './Progress'
import {
  AmountWrapper,
  TabsWrapper,
  Wrapper,
  ButtonWrapper,
} from './BusinessInfo.style'
import Team from './Team'

interface BusinessInfoProps {
  data?: {
    amount?: number
    raised?: number
    name?: string
    description?: string
  }
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  data: { amount = 5256, raised = 3564, name = 'BingoBong' } = {},
}) => {
  const [currentTab, setCurrentTab] = useState<ITab>(tabs[0])
  const raisedPercentage = Math.round((raised / amount) * 100)
  return (
    <Wrapper container direction="row" alignItems="flex-start">
      <TabsWrapper>
        <Toolbar
          currentTab={currentTab}
          tabs={tabs.filter(({ name }) => name !== currentTab.name)}
          onTabClick={setCurrentTab}
        />
        <Tab tab={currentTab} />
        <ButtonWrapper>
          <Button>Read more...</Button>
          <Team name={name} />
        </ButtonWrapper>
      </TabsWrapper>
      <AmountWrapper>
        <Amount
          align="right"
          title="This business needs"
          value={amount.toFixed(0)}
          variant="h4"
          color="secondary"
          gridProps={{ alignItems: 'flex-end' }}
        />
        <Amount
          align="right"
          title="Raised"
          value={raised.toFixed(0)}
          gridProps={{ alignItems: 'flex-end' }}
        />
        <Progress value={raisedPercentage} />
        <Amount
          align="right"
          variant="h6"
          value={`${raisedPercentage}%`}
          gridProps={{ alignItems: 'flex-end' }}
          withoutCurrency
        />
      </AmountWrapper>
    </Wrapper>
  )
}

export default BusinessInfo
