import { Context } from 'nexus-prisma/dist/utils'
import ratingModel from 'modules/rating/rating.model'

export const searchBusinesses = async (_: any, args: any, ctx: Context) => {
  const { name, categoryId } = args
  const businesses = await ctx.prisma.business.findMany({
    where: {
      name: { equals: name },
      category: {
        id: { equals: categoryId },
      },
    },
    include: { ratings: true },
  })
  return businesses.map((business) => ({
    ...business,
    avgRating:
      business.ratings.reduce((a, b) => a + b.rate, 0) /
      business.ratings.length,
  }))
}
