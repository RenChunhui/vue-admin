import { HttpResponse, http } from 'msw'
import { db } from '../db'

export const authHandlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json()
    const user = db.user.findFirst({ where: { username: { equals: body.username } }})

    if(!user) {
      // NotFoundException
      return new HttpResponse(null, { status: 403 })
    }

    // const isPasswordValid = await bcrypt.compare(password, user.password)

    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Invalid password')
    // }

    return HttpResponse.json({
      access_token: '123456'
    })
  }),

  http.post('/api/auth/logout', () => {})
]
