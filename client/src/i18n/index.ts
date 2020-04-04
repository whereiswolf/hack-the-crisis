import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import merge from 'deepmerge'
import modules from 'modules'
import enTranslation from './en'

const globalResources: Resource = {
  en: { translation: enTranslation },
}

const resources = modules.reduce<Resource>(
  (translations, { i18n }) => merge(translations, i18n),
  globalResources
)

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
