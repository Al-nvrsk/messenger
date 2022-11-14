import createUser from './createUser'
import '@testing-library/jest-dom'
import store from 'store/Store'
import loginApi from 'api/loginAPI'
import { router } from 'router/routerApp'
import mockedUser from 'test/mockedUser'

jest.mock('utils/helper/submitForm', () => jest.fn().mockImplementationOnce(() => {
  return mockedUser
}))

describe('createUser', () => {
  test('should return all chains of send userInfo to server ', async () => {
    jest.spyOn(router, 'go').mockImplementationOnce(() => {})
    jest.spyOn(loginApi, 'create')
    jest.spyOn(store, 'setState')
    const argsForCall = JSON.stringify(mockedUser)
    await createUser()
    expect(loginApi.create).toHaveBeenCalledWith(argsForCall)
    expect(router.go).toHaveBeenCalledTimes(1)
    expect(store.setState).toHaveBeenCalledTimes(2)
  })
})
