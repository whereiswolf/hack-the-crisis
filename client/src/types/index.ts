export * from './module'

export interface Tag {
  name: string
}

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
  siteUrl: String
  amount: number
  description: string
  history: string
  imageUrl: string
  category: Category
  type: string
  vouchers: Voucher[]
}

export interface VoucherData {
  voucher: Voucher
}
