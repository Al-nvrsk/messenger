import { rest } from 'msw'
import { BASE_URL, err } from '../api/baseAPI'
import mockedChat from 'test/mockedChat'
import mockedUsers from 'test/mockedUsers'

const handlerChat = [
  rest.get(`${BASE_URL}` + '/chats', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200),
      ctx.json(mockedChat)
    )
  }),
  rest.post(`${BASE_URL}` + '/chats', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  }),
  rest.delete(`${BASE_URL}` + '/chats', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  }),
  rest.put(`${BASE_URL}` + '/chats/users', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  }),
  rest.get(`${BASE_URL}` + '/chats/11/users', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200),
      ctx.json(mockedUsers)
    )
  }),
  rest.delete(`${BASE_URL}` + '/chats', (req, res, ctx) => {
    if (!req) { throw err }
    return res(
      ctx.status(200)
    )
  })
]

export default handlerChat
