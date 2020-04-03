import { Module } from 'types'
import example from './example'

const modules: Module[] = [
  // Append modules here
  example,
]

export default modules.reduce(
  (acc: Module, moduleConfig: Module): Module => ({
    routes: [...acc.routes, ...moduleConfig.routes],
    reducers: { ...acc.reducers, ...moduleConfig.reducers },
  }),
  {
    routes: [],
    reducers: {},
  }
)
