import { objectType } from 'nexus'

export default objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.businesses()
  },
})