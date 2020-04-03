import { RouteProps } from 'react-router-dom'
import { Reducer } from 'redux'

export interface Module {
  routes: RouteProps[]
  reducers: { [reducer: string]: Reducer }
}
