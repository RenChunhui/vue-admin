import { HttpResponse, http } from 'msw'
import { db } from '../db'

type LoginResponseBody = {
  username: string
  password: string
}

export const authHandlers = [
  http.post<LoginResponseBody>('/api/auth/login', async({ request}) => {
    const payload: any = await request.json()
    const user = db.user.findFirst({ where: { username: { equals: payload.username } } })

    if (!user) {
      return HttpResponse.json({
        message: `${payload.username} 没有找到`
      }, { status: 404 })
    }

    const isPasswordValid = payload.password === user.password

    if (!isPasswordValid) {
      return HttpResponse.json({
        message: '密码错误'
      }, { status: 401 })
    }

    return HttpResponse.json({
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcxODAwNzY5N30.6Muu4t11t1tgsDcWa8DEcFt6TdIxjgY9hbs6w0stT6A'
    })
  })
]
