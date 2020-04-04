export const getRecommendedVouchers = () => {}

export const getSpecialForYouVoucher = async (_, args, ctx) => {
  const numOfRecords = await ctx.prisma.voucher.count()
  const randomNumber = 1 + Math.floor(numOfRecords * Math.random())
  const records = await ctx.prisma.voucher.findMany()
  return records[randomNumber - 1]
}

export const searchVouchers = async (_, args, ctx) => {
  const { type } = args
  console.log(args, type)
  return ctx.prisma.voucher.findMany({
    where: {
      business: {
        type: {
          equals: type,
        },
      },
    },
  })
}
