import { PrismaClient } from '@prisma/client'
// eslint-disable-next-line import/no-extraneous-dependencies
import cuid2Extension from 'prisma-extension-cuid2'

export const extendedPrismaClient = new PrismaClient().$extends(
  cuid2Extension({
    // @ts-ignore
    fields: ['User:id', 'UserTelegramMetaData:id'],
  }),
)

export type ExtendedPrismaClient = typeof extendedPrismaClient
