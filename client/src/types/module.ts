import { RouteProps } from 'react-router-dom'
import { ResourceLanguage } from 'i18next'

export interface Module {
  name: string
  routes: RouteProps[]
  i18n: { [lng: string]: ResourceLanguage }
}
