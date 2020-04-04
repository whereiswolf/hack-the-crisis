import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from 'nexus'

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
    t.model.ratings()
    t.model.vouchers()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    // Read
    t.crud.tags(),
    t.crud.vouchers(),
    t.crud.businesses(),
    t.crud.categories(),
    t.crud.orders()
    
    // Read example: { where: { id: 1 } }
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
    // Create example: { data: { name: "Test tag" } }
    t.crud.createOneTag()
    t.crud.createOneCategory()
    t.crud.createOneBusiness()
    t.crud.createOneVoucher()
    t.crud.createOneOrder()

    // Updates example: { data: { name: "Test tag" }, where: { id: 1 } }
    t.crud.updateOneBusiness()
    t.crud.updateOneCategory()
    t.crud.updateOneVoucher()
    t.crud.updateOneTag()
    t.crud.updateOneOrder()

    // Deletes example: { where: { id: 1 } }
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
