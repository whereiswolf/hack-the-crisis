import { hash } from 'bcrypt'

const saltRounds = 10

export const createOneUser = async (
  _: any,
  args: any,
  ctx: any,
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { email, password } = args
    hash(password, saltRounds, (err, hash) => {
      if (!err) {
        resolve(
          ctx.prisma.user.create({
            data: { email, password: hash },
          }),
        )
      }
    })
  })
}
