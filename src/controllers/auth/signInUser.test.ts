import signInUser from './signInUser'
import '@testing-library/jest-dom'
import store from 'store/Store'
import getOwnUserinfo from './getOwnUserinfo'
import getAllChats from '../chats/getAllChats'
import { router } from 'router/routerApp'

const user = {
  login: 'User',
  password: '1Q'
}
jest.mock('./getOwnUserinfo')
jest.mock('../chats/getAllChats')
jest.mock('utils/helper/submitForm', () => {
  return jest.fn(() =>
    () => user
  )
})
describe('signInService', () => {
  test('should run functions chain of Auth', async () => {
    jest.spyOn(router, 'go').mockImplementationOnce(() => {})
    await signInUser()
    expect(store.getState().isAuth).toEqual(true)
    expect(getOwnUserinfo).toHaveBeenCalledTimes(1)
    expect(router.go).toHaveBeenCalledTimes(1)
    expect(getAllChats).toHaveBeenCalledTimes(1)
  })
})
