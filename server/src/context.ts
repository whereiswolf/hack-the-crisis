import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  req: any
  prisma: PrismaClient
}

export function createContext({ req }): Context {
  return { req, prisma }
}
