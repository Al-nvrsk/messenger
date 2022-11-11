import signInUser from './signInUser'
import '@testing-library/jest-dom'
import store from '../../store/Store'
import userGetController from './getOwnUserinfo'
import chatsGetController from '../chats/getAllChats'

const user = {
  login: 'User',
  password: '1Q'
}
jest.mock('./getOwnUserinfo')
jest.mock('../../utils/renderDOM')
jest.mock('../chats/getAllChats')
jest.mock('../../utils/helper/submitForm', () => {
  return jest.fn(() =>
    () => user
  )
})
describe('signInService', () => {
  test('should run functions chain of Auth', async () => {
    await signInUser()
    expect(store.getState().isAuth).toEqual(true)
    expect(userGetController).toHaveBeenCalledTimes(1)
    expect(chatsGetController).toHaveBeenCalledTimes(1)
  })
})
