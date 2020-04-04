import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { sync } from 'mkdirp'
import { generate } from 'shortid'

const uploadDir = resolve(__dirname, '../../../Images')
sync(uploadDir)

const storeUpload = async ({ stream, filename }: any): Promise<any> => {
  const id = generate()
  const file = `${id}-${filename}`
  const path = `${uploadDir}/${file}`
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path: file }))
      .on('error', reject),
  )
}

export const processUpload = async (_: any, { file }: any, ctx: any) => {
  const { stream, filename, mimetype, encoding } = await file
  const { id, path } = await storeUpload({ stream, filename })
  return { id, filename, mimetype, encoding, path }
}
