import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from 'nexus'

const Voucher = objectType({
  name: 'Voucher',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.price()
    t.model.promotion()
    t.model.expirationDate()
    t.model.description()
    t.model.imageUrl()
    t.model.business()
    t.model.tags()
  },
})

const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.vouchers()
  },
})

const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.businesses()
  },
})

const Business = objectType({
  name: 'Business',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.city()
    t.model.address()
    t.model.siteUrl()
    t.model.amount()
    t.model.description()
    t.model.history()
    t.model.imageUrl()
    t.model.category()
    t.model.vouchers({
      pagination: false,
    })
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('vouchers', {
      type: 'Voucher',
      resolve: (_, args, ctx) => {
        return ctx.prisma.voucher.findMany()
      },
    })
    t.list.field('businesses', {
      type: 'Business',
      resolve: (_, args, ctx) => {
        return ctx.prisma.business.findMany();
      },
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneVoucher()
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Voucher, Business, Tag, Category],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
