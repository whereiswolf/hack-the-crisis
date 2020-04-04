import { RouteProps } from 'react-router'
import useReactRouter from 'use-react-router'

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
