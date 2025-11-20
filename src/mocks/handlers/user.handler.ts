import { http } from "msw";
import { userCollection } from '../collections/user.collection'

export const userHandlers = [
  http.get('/api/v1/users', () => {
    const users = userCollection.findMany(
      user => user.where({}),
      {
        skip: 0,
        take: 10
      }
    )
  })
]
