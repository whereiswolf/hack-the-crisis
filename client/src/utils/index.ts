import { RouteProps } from 'react-router'
import useReactRouter from 'use-react-router'
import hexRgb from 'hex-rgb'

export const getTranslationKeys = <T>(moduleName: string, strings: T) =>
  Object.entries(strings).reduce<T>(
    (obj, [key, value]) => ({ ...obj, [key]: `${moduleName}_${value}` }),
    {} as T
  )

export const addBasePath = (basePath: string, routes: RouteProps[]) =>
  routes.map((route) => ({
    ...route,
    path: `${basePath}${route.path}`,
  }))

export function useId() {
  const {
    match: {
      params: { id },
    },
  } = useReactRouter()
  return Number(id)
}

export const rgba = (hex: string, opacity: number = 1) => {
  const rgbArray = hexRgb(hex, { format: 'array' })
  rgbArray[3] = opacity
  return `rgba(${rgbArray.join(', ')})`
}
