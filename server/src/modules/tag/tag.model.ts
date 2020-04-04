import { objectType } from 'nexus'

export default objectType({
  name: 'Tag',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.vouchers()
  },
})