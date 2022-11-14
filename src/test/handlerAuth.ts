import { rest } from 'msw'
import { BASE_URL, err } from '../api/baseAPI'
import mockedUser from './mockedUser'

const handlerAuth = [
  rest.post(`${BASE_URL}` + '/auth/signup', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  }),
  rest.post(`${BASE_URL}` + '/auth/signin', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  }),
  rest.get(`${BASE_URL}` + '/auth/user', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200),
      ctx.json(mockedUser)
    )
  }),
  rest.post(`${BASE_URL}` + '/auth/logout', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  })
]

export default handlerAuth
