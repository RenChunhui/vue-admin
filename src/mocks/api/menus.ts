import { HttpResponse, http } from 'msw'
import { db } from '../db'

export const menusHandlers = [
  http.get('/api/menus', () => {
    return HttpResponse.json(db.menu.getAll())
  })
]
