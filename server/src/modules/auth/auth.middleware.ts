import jwt = require('jsonwebtoken')
import { config } from '../../config';

const SECRET: string = config.APP_SECRET;

function verify(token: string) {
  return jwt.verify(token, SECRET)
}

export const checkUser = async (resolve, _, args, context, info) => {
  try {
    console.log(SECRET);
    const { authorization } = context.request.request.headers
    const token = authorization.replace('Bearer ', '')
    context.user = verify(token)
  } catch (error) {
    context.user = null
  }
  return resolve(_, args, context, info)
}
