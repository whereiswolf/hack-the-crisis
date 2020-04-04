import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType, stringArg, intArg } from 'nexus'
import { getSpecialForYouVoucher, searchVouchers } from './modules/voucher'
import { searchBusinesses } from './modules/business'

const Order = objectType({
  name: 'Order',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.name()
    t.model.count()
    t.model.voucher()
  },
})

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
    t.model.orders()
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

const Rating = objectType({
  name: 'Rating',
  definition(t) {
    t.model.id()
    t.model.rate()
    t.model.businesses()
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
    t.model.ratings()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.list.field('vouchers', {
      type: 'Voucher',
      resolve: searchVouchers,
      args: {
        name: stringArg({ nullable: true }),
        businessId: intArg({ nullable: true }),
        businessType: stringArg({ nullable: true }),
      },
    }),
    t.list.field('businesses', {
      type: 'Business',
      resolve: searchBusinesses,
      args: {
        name: stringArg({ nullable: true }),
        categoryId: intArg({ nullable: true }),
      },
    }),
    t.field('recommended', {
      type: 'Voucher',
      resolve: getSpecialForYouVoucher,
    }),

    t.crud.tags(),
    t.crud.categories(),
    t.crud.orders()
    t.crud.business(),
    t.crud.category(),
    t.crud.voucher(),
    t.crud.tag(),
    t.crud.order()
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneTag()
    t.crud.createOneCategory()
    t.crud.createOneBusiness()
    t.crud.createOneVoucher()
    t.crud.createOneOrder()
    t.crud.updateOneBusiness()
    t.crud.updateOneCategory()
    t.crud.updateOneVoucher()
    t.crud.updateOneTag()
    t.crud.updateOneOrder()
    t.crud.deleteOneBusiness()
    t.crud.deleteOneVoucher()
    t.crud.deleteOneTag()
    t.crud.deleteOneCategory()
    t.crud.deleteOneOrder()
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Voucher, Business, Tag, Category, Rating, Order],
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
