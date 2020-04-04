import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@material-ui/core'
import strings from '../strings'

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

interface TestProps {}

const Test: React.FC<TestProps> = () => {
  const { loading, error } = useQuery(EXCHANGE_RATES)
  const { t } = useTranslation()
  return (
    <Card>
      <CardContent>
        <header className="App-header">
          <h3>
            Edit <code>src/modules/*</code>.
          </h3>
          {loading && <p>{t(strings.DATA_LOADING)}</p>}
          {error && <p>{t(strings.DATA_ERROR)}</p>}
        </header>
      </CardContent>
    </Card>
  )
}

export default Test
