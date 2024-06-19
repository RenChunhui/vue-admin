import { HttpResponse, http } from 'msw'
import { db } from '../db'

export const usersHandlers = [
  http.get('/api/user/menus',() => {
    const menus = db.menu.getAll()
    return HttpResponse.json(menus)
  })
]
