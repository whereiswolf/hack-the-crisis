
import * as dotenv from 'dotenv';
dotenv.config()

export const config = {
  APP_SECRET: process.env.APP_SECRET || ''
}