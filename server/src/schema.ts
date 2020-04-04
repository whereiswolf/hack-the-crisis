import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType, stringArg } from 'nexus'
import { getSpecialForYouVoucher, searchVouchers } from './modules/voucher'

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
    t.model.type()
    t.model.vouchers({
      pagination: false,
    })
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('recommended', {
      type: 'Voucher',
      resolve: getSpecialForYouVoucher,
    }),
      t.list.field('vouchers', {
        type: 'Voucher',
        resolve: searchVouchers,
        args: {
          type: stringArg({ nullable: true }),
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
