export const getTranslationKeys = <T>(moduleName: string, strings: T) =>
  Object.entries(strings).reduce<T>(
    (obj, [key, value]) => ({ ...obj, [key]: `${moduleName}_${value}` }),
    {} as T
  )
