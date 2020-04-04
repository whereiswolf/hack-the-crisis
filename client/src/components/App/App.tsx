import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from '@material-ui/core'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { client, lightTheme, darkTheme } from 'config'
import { Module } from 'types'
import Layout from './Layout'
import NotFoundMessage from './NotFoundMessage'
import { getRoutes, getNavItems } from './App.utils'
import { GlobalStyle } from './App.style'

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
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
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
        </StyledThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
