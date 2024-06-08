import { HttpResponse, http } from 'msw'
import { db } from '../db'

export const usersHandlers = [
  http.post('/api/users', ({ request }) => create(request)),
  http.get('/api/users', () => findAll()),
  http.get('/api/users/:id', ({ params }) => findById(params.id as string)),
  http.patch('/api/users/:id', update),
  http.delete('/api/users/:id', ({ params }) => remove(params.id as string))
]

function create(body: any) {
  const user = db.user.create({
    username: '',
    password: ''
  })

  return HttpResponse.json(user)
}

function findAll() {
  const users = db.user.getAll()
  return HttpResponse.json(users)
}

function findById(id: string) {
  const user = db.user.findFirst({ where: { id: { equals: id } } })
  return HttpResponse.json(user)
}

function update() {

}

function remove(id: string) {
  const user = db.user.delete({ where: { id: { equals: id } } })
  return HttpResponse.json(user)
}
