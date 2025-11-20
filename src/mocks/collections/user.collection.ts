import { Collection } from '@msw/data'
import z from 'zod'

export const userCollection = new Collection({
  schema: z.object({
    id: z.number(),
    avatar: z.string(),
    address: z.string(),
    sex: z.boolean(),
    bio: z.string()
  })
})
