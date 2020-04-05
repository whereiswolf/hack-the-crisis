export const getSpecialForYouVouchers = async (_: any, args: any, ctx: any) => {
  const numOfRecords = await ctx.prisma.voucher.count()
  const randomNumber = 1 + Math.floor(numOfRecords * Math.random())
  const records = await ctx.prisma.voucher.findMany()
  return records[randomNumber - 1]
}

export const searchVouchers = async (_: any, args: any, ctx: any) => {
  const { businessId, businessType, name, city, category } = args
  return ctx.prisma.voucher.findMany({
    where: {
      name: { equals: name },
      business: {
        id: { equals: businessId },
        type: { equals: businessType },
        city: { contains: city },
        category: {
          id: { equals: category },
        },
      },
    },
  })
}

export const getSpecialVouchers = async (_: any, args: any, ctx: any) => {
  const numOfRecords = await ctx.prisma.voucher.count()
  const records = await ctx.prisma.voucher.findMany()
  const randomVouchers = []
  const usedNumbers: any = {}
  while (randomVouchers.length < 3) {
    const randomNumber = 1 + Math.floor(numOfRecords * Math.random())
    if (!usedNumbers[randomNumber - 1]) {
      randomVouchers.push(records[randomNumber - 1])
      usedNumbers[randomNumber] = true
    }
  }
  return randomVouchers
}
