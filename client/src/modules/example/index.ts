import { Module } from 'types'
import routes from './routes'
import reducers from './redux'

const moduleConfig: Module = {
  reducers,
  routes,
}

export default moduleConfig
