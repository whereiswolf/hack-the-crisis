import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from '@material-ui/core'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { client, lightTheme, darkTheme } from 'config'
import { Module } from 'types'
import NotFoundMessage from '../NotFoundMessage'
import { getRoutes, getNavItems } from './App.utils'
import Layout from 'components/Layout'

interface AppProps {
  modules: Module[]
}

const App: React.FC<AppProps> = ({ modules }) => {
  const [isDarkTheme] = useState(true)
  const theme = isDarkTheme ? darkTheme : lightTheme
  const routes = getRoutes(modules)
  const navItems = getNavItems(modules)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout items={navItems}>
            <Switch>
              {routes.map((route) => (
                // @ts-ignore
                <Route key={route.path} {...route} />
              ))}
              <Route component={NotFoundMessage} />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
