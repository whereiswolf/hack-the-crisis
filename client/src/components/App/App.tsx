import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from '@material-ui/core'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { client, theme } from 'config'
import { Module } from 'types'
import NotFoundMessage from '../NotFoundMessage'
import { getRoutes } from './App.utils'

interface AppProps {
  modules: Module[]
}

const App: React.FC<AppProps> = ({ modules }) => {
  const routes = getRoutes(modules)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {routes.map((route) => (
              // @ts-ignore
              <Route key={route.path} {...route} />
            ))}
            <Route component={NotFoundMessage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
