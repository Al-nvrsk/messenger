import changeUserProfile from './changeUserProfile'
import '@testing-library/jest-dom'
import store from 'store/Store'
import userApi from 'api/userAPI'
import mockedUser from 'test/mockedUser'
import getOwnUserinfo from '../auth/getOwnUserinfo'

jest.mock('utils/helper/submitForm', () => jest.fn().mockImplementationOnce(() => {
  return mockedUser
}))
jest.mock('../auth/getOwnUserinfo', () => jest.fn().mockImplementationOnce(() => {
  return {}
}))

describe('changeUserProfile', () => {
  test('should return all chains of send changeUserProfile to server', async () => {
    jest.spyOn(userApi, 'changeProfile')
    jest.spyOn(store, 'setState')
    const argsForCall = JSON.stringify(mockedUser)
    await changeUserProfile()
    expect(userApi.changeProfile).toHaveBeenCalledWith(argsForCall)
    expect(getOwnUserinfo).toHaveBeenCalledTimes(1)
    expect(store.setState).toHaveBeenCalledTimes(3)
    expect(store.getState().user.id).toBe(1)
  })
})
