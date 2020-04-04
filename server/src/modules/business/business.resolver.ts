export const searchBusinesses = async (_: any, args: any, ctx: any) => {
  const { name, categoryId } = args
  const businesses = await ctx.prisma.business.findMany({
    where: {
      name: { equals: name },
      category: {
        id: { equals: categoryId },
      },
    },
  })
  return businesses
}
