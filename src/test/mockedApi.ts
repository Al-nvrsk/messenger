import { setupServer } from 'msw/node'
import handlerAuth from './handlerAuth'
import handlerChat from './handlerChat'
import handlerUser from './handlerUser'

export const handlers = [
  ...handlerAuth,
  ...handlerUser,
  ...handlerChat

]

export const server = setupServer(...handlers)
