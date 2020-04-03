import { Module } from 'types'
import dogs from './dogs'

const modules: Module[] = [
  // Append modules here
  dogs,
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
