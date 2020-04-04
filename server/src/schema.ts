import { nexusPrismaPlugin } from 'nexus-prisma'
import { arg, makeSchema, objectType, stringArg, intArg } from 'nexus'
import { GraphQLUpload } from 'graphql-upload'

import { getSpecialForYouVouchers, searchVouchers } from './modules/voucher'
import { searchBusinesses } from './modules/business'
import { processUpload } from './modules/file'
import { createOneUser } from './modules/user'
import { loginUser } from './modules/auth'

import Voucher from './modules/voucher/voucher.model'
import Category from './modules/category/category.model'
import Business from './modules/business/business.model'
import Order from './modules/order/order.model'
import Tag from './modules/tag/tag.model'
import Rating from './modules/rating/rating.model'
import File from './modules/file/file.model'
import User from './modules/user/user.model'
import Auth from './modules/auth/auth.model'

const Upload = GraphQLUpload

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('login', {
      type: 'Auth',
      resolve: loginUser,
      args: {
        email: stringArg(),
        password: stringArg(),
      }
    })
    t.list.field('vouchers', {
      type: 'Voucher',
      resolve: searchVouchers,
      args: {
        name: stringArg({ nullable: true }),
        businessId: intArg({ nullable: true }),
        businessType: stringArg({ nullable: true }),
        city: stringArg({ nullable: true }),
        distance: intArg({ nullable: true }),
        category: intArg({ nullable: true }),
      },
    })
    t.crud.voucher()
    t.list.field('businesses', {
      type: 'Business',
      resolve: searchBusinesses,
      args: {
        name: stringArg({ nullable: true }),
        categoryId: intArg({ nullable: true }),
      },
    })
    t.field('recommended', {
      type: 'Voucher',
      resolve: getSpecialForYouVouchers,
    })
    t.crud.business()
    t.crud.users()
    t.crud.user()
    t.crud.tags()
    t.crud.tag()
    t.crud.categories()
    t.crud.category()
    t.crud.orders()
    t.crud.order()
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('uploadFile', {
      type: 'File',
      args: {
        file: arg({ type: 'Upload', required: true }),
      },
      resolve: processUpload,
    })
    t.field('createOneUser', {
      type: 'User',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: createOneUser,
    })
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
  types: [
    Query,
    Mutation,
    File,
    Upload,
    Voucher,
    Business,
    Tag,
    Category,
    Rating,
    Order,
    User,
    Auth,
  ],
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
