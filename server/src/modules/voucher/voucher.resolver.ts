export const getRecommendedVouchers = () => {}

export const getSpecialForYouVouchers = async (_: any, args: any, ctx: any) => {
  const numOfRecords = await ctx.prisma.voucher.count()
  const randomNumber = 1 + Math.floor(numOfRecords * Math.random())
  const records = await ctx.prisma.voucher.findMany()
  return records[randomNumber - 1]
}

export const searchVouchers = async (_: any, args: any, ctx: any) => {
  const { businessId, businessType, name } = args
  return ctx.prisma.voucher.findMany({
    where: {
      name: { equals: name },
      business: {
        id: { equals: businessId },
        type: { equals: businessType },
      },
    },
  })
}
