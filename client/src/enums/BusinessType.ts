enum BusinessType {
  All,
  Local,
  Online,
}

const KEY = 'BusinessType'

export const BusinessTypeTranslation = {
  All: `${KEY}${BusinessType.All}`,
  Local: `${KEY}${BusinessType.Local}`,
  Online: `${KEY}${BusinessType.Online}`,
}

export default BusinessType
