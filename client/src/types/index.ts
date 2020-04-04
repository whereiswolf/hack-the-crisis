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
  tags: Tag[]
}

export interface VoucherData {
  voucher: Voucher
}
