import { objectType } from 'nexus'

export default objectType({
  name: 'File',
  definition(t) {
    t.id('id')
    t.string('path')
    t.string('filename')
    t.string('mimetype')
    t.string('encoding')
  },
})