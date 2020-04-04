import { Module } from 'types'
import { RouteProps } from 'react-router'
import { NavItem } from 'components/Layout'

export const getRoutes = (modules: Module[]) =>
  modules.reduce<RouteProps[]>(
    (routes, moduleConfig) => [...routes, ...moduleConfig.routes],
    []
  )

export const getNavItems = (modules: Module[]) =>
  modules.reduce<NavItem[]>(
    (navItems, moduleConfig) => [
      ...navItems,
      { label: moduleConfig.label, path: moduleConfig.path },
    ],
    []
  )
