import React from 'react'

interface Voucher {}

interface VouchersListProps {
  vouchers: Voucher[]
}

const VouchersList: React.FC<VouchersListProps> = ({ vouchers }) => {
  return <div>VouchersList</div>
}

export default VouchersList
