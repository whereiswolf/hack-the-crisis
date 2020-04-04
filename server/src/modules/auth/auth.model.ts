import { objectType } from 'nexus'

export default objectType({
  name: 'Auth',
  definition(t) {
    t.string('token')
  },
})
