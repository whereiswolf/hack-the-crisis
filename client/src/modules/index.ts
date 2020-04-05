import { Module } from 'types'
import home from './home'
import bestDeals from './best-deals'
import vouchers from './vouchers'
import businesses from './businesses'
import aboutUs from './about-us'
import contact from './contact'
import login from './login'

const modules: Module[] = [
  // Append modules here
  home,
  bestDeals,
  vouchers,
  businesses,
  aboutUs,
  contact,
  login,
]

export default modules
