import { objectType } from 'nexus'

export default objectType({
  name: 'Order',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.name()
    t.model.count()
    t.model.voucher()
    t.model.user()
  },
})
