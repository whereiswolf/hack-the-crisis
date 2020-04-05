export * from './module'

export interface Tag {
  name: string
}

export type ListType = 'list' | 'map'

export interface Voucher {
  id: number
  name: string
  imageUrl: string
  description: string
  price: number
  promotion: number
  expirationDate: string
  business: Business
  tags: Tag[]
}

export interface Category {
  id: number
  name: string
}

export interface Rating {
  id: number
  rate: number
}
export interface Business {
  id: number
  name: string
  city: string
  address: string
  siteUrl?: string
  amount: number
  description: string
  history?: string
  imageUrl: string
  category: Category
  type: string
  vouchers: Voucher[]
}

export interface BusinessData {
  business: Business
}

export interface VoucherData {
  voucher: Voucher
}

export interface VouchersForYouData {
  vouchersForYou: Voucher[]
}
