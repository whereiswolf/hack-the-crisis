import { Module } from 'types'
import { MODULE_NAME } from './strings'
import i18n from './i18n'
import routes from './routes'

const moduleConfig: Module = {
  i18n,
  routes,
  name: MODULE_NAME,
}

export default moduleConfig
