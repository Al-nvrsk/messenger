import '@testing-library/jest-dom'
import store from 'store/Store'
import userApi from 'api/userAPI'
import mockedPassword from 'test/mockedPassword'
import changeUserPassword from './changeUserPassword'
import getOwnUserinfo from '../auth/getOwnUserinfo'

jest.mock('utils/helper/submitForm', () => jest.fn().mockImplementationOnce(() => {
  return mockedPassword
}))
jest.mock('../auth/getOwnUserinfo', () => jest.fn().mockImplementationOnce(() => {
  return {}
}))

describe('changePassword', () => {
  test('should return all chains of send changePassword to server ', async () => {
    jest.spyOn(userApi, 'changePassword')
    jest.spyOn(store, 'setState')
    const argsForCall = JSON.stringify(mockedPassword)
    await changeUserPassword()
    expect(userApi.changePassword).toHaveBeenCalledWith(argsForCall)
    expect(getOwnUserinfo).toHaveBeenCalledTimes(1)
    expect(store.setState).toHaveBeenCalledTimes(2)
  })
})
