import strings from 'strings'
import { BusinessTypeTranslation } from 'enums/BusinessType'

export default {
  [strings.LOGIN]: 'Login',
  [BusinessTypeTranslation.All]: 'All',
  [BusinessTypeTranslation.Local]: 'Local businesses',
  [BusinessTypeTranslation.Online]: 'Online',
}
