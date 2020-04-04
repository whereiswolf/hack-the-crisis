import { getTranslationKeys } from 'utils'

export const MODULE_NAME = 'example'

export const STRINGS = {
  DATA_LOADING: 'DATA_LOADING',
  DATA_ERROR: 'DATA_ERROR',
}

export default getTranslationKeys(MODULE_NAME, STRINGS)
