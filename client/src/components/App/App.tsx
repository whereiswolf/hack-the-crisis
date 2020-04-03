import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Module } from 'types'
import { configureStore } from '@reduxjs/toolkit'

interface AppProps {
  modules: Module
}

const App: React.FC<AppProps> = ({ modules: { routes, reducers } }) => {
  const store = configureStore({ reducer: reducers })
  return (
    <Provider store={store}>
      <Router>
        {routes.map((route) => (
          // @ts-ignore
          <Route key={route.path} {...route} />
        ))}
      </Router>
    </Provider>
  )
}

export default App
