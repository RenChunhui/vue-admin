import { http } from 'msw'

export const rolesHandlers = [
  http.post('/roles', () => {}),
  http.get('/roles', () => {}),
  http.get('/roles/:id',() => {}),
  http.patch('/roles/:id', () => {}),
  http.delete('/roles/:id', () => {})
]
