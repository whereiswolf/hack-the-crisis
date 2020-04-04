import { objectType } from 'nexus'

export default objectType({
  name: 'Rating',
  definition(t) {
    t.model.id()
    t.model.rate()
    t.model.businesses()
  },
})