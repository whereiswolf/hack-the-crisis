import { Module } from 'types'
import strings, { MODULE_NAME } from './strings'
import i18n from './i18n'
import routes, { MODULE_BASE_PATH } from './routes'

const moduleConfig: Module = {
  i18n,
  routes,
  name: MODULE_NAME,
  path: MODULE_BASE_PATH,
  label: strings.MODULE_NAME,
}

export default moduleConfig
