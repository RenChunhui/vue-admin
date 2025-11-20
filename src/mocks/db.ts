import { Collection } from "@msw/data"
import z from "zod"

const accountSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),

  get profile() {
    return profileSchema
  }
})
const profileSchema = z.object({
  id: z.number(),
  nickname: z.string(),
  avatar: z.string()
})

const accounts = new Collection({ schema: accountSchema })
const profiles = new Collection({ schema: profileSchema })

accounts.defineRelations(({ one }) => ({ profile: one(profiles) }))

export const db = {
  accounts,
  profiles
}

await db.accounts.createMany(5, (index) => {
  return {
    id: index + 1,
    username: 'username',
    password: '000000',
    profile: await profiles.create({
      id: index + 1,
      nickname: '',
      avatar: ''
    })
  }
})

db.accounts.create({
  id: 1,
  username: 'username',
  password: '000000',
  profile: await profiles.create({
    id: 1,
    nickname: '',
    avatar: ''
  })
})
