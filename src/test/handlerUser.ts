import { rest } from 'msw'
import { BASE_URL, err } from '../api/baseAPI'
import mockedUser from './mockedUser'

const handlerUser = [
  rest.put(`${BASE_URL}` + '/user/profile', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200),
      ctx.json(mockedUser)
    )
  }),
  rest.put(`${BASE_URL}` + '/user/password', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  }),
  rest.put(`${BASE_URL}` + '/user/profile/avatar', (req, res, ctx) => {
    mockedUser.avatar = 'avatar1'
    if (!req) { throw err }
    return res(
      ctx.status(200),
      ctx.json(mockedUser)
    )
  })
]

export default handlerUser
