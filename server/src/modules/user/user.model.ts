import { objectType } from 'nexus'

export default objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.email()
    t.model.password()
    t.model.orders()
    t.model.accountType()
  },
})