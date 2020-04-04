import { Module } from 'types'
import { RouteProps } from 'react-router'

export const getRoutes = (modules: Module[]) =>
  modules.reduce<RouteProps[]>(
    (routes, moduleConfig) => [...routes, ...moduleConfig.routes],
    []
  )
