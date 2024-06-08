import { HttpResponse, http } from 'msw'
import { db } from '../db'

export const organizeHandlers = [
  http.get('/api/organize', () => {
    return HttpResponse.json(db.organize.getAll())
  })
]
