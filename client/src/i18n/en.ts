import strings from 'strings'
import { BusinessType } from 'enums'

export default {
  [strings.LOGIN]: 'Login',
  [`${strings.BUSINESS_TYPE}${BusinessType.All}`]: 'All',
  [`${strings.BUSINESS_TYPE}${BusinessType.Local}`]: 'Local businesses',
  [`${strings.BUSINESS_TYPE}${BusinessType.Online}`]: 'Online',
}
