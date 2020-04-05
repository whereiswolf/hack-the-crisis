import { objectType } from 'nexus'

export default objectType({
  name: 'Business',
  definition(t) {
    t.float('avgRating', {nullable: true})
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