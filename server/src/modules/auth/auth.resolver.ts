import { sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'

export const loginUser = async (_: any, args: any, ctx: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = args
    const [user] = await ctx.prisma.user.findMany({
      where: { email: { equals: email } },
    })
    compare(password, user.password, (err, areTheSame) => {
      if (areTheSame) resolve({ token: sign({ email }, 'SECRET') })
    })
  })
}
