import { objectType } from 'nexus'

export default objectType({
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