import { http } from 'msw'

export const usersHandlers = [
  http.post('/users', () => {}),
  http.get('/users', () => {}),
  http.get('/users/:id',() => {}),
  http.patch('/users/:id', () => {}),
  http.delete('/users/:id', () => {})
]
