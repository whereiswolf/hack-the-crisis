import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Module } from 'types'
import NotFoundMessage from '../NotFoundMessage'

interface AppProps {
  modules: Module
}

const App: React.FC<AppProps> = ({ modules: { routes, reducers } }) => {
  const store = configureStore({ reducer: reducers })
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route) => (
            // @ts-ignore
            <Route key={route.path} {...route} />
          ))}
          <Route component={NotFoundMessage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
