import Loadable from 'react-loadable'
import { Loader } from 'components'

export default [
  {
    path: '/',
    component: Loadable({
      loader: () => import('./containers/Test'),
      loading: Loader,
    }),
  },
]
