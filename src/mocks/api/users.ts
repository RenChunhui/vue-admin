import { HttpResponse, http } from 'msw'
import { db } from '../db'

export const usersHandlers = [
  http.post('/users', ({ request }) => create(request)),
  http.get('/users', () => findAll()),
  http.get('/users/:id',({ params }) => findById(params.id as string)),
  http.patch('/users/:id', update),
  http.delete('/users/:id', ({params}) => remove(params.id as string))
]

function create(body:any) {
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

function findById(id:string) {
  const user = db.user.findFirst({ where: { id: { equals: id } }})
  return HttpResponse.json(user)
}

function update() {

}

function remove( id:string) {
  const user = db.user.delete({where: { id: { equals: id}}})
  return HttpResponse.json(user)
}
