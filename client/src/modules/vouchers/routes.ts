import { addBasePath } from 'utils'
import Loadable from 'react-loadable'
import { Loader } from 'components'

export const MODULE_BASE_PATH = '/vouchers'

export default addBasePath(MODULE_BASE_PATH, [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./containers/Home'),
      loading: Loader,
    }),
  },

  {
    path: '/:id',
    exact: true,
    component: Loadable({
      loader: () => import('./containers/Order'),
      loading: Loader,
    }),
  },
])
