import changeAvatar from './changeUserAvatar'
import '@testing-library/jest-dom'
import store from 'store/Store'
import userApi from 'api/userAPI'
import mockedUser from 'test/mockedUser'

jest.mock('utils/helper/submitForm', () => jest.fn().mockImplementationOnce(() => {
  return mockedUser
}))

describe('changeAvatar', () => {
  test('should return all chains of changeAvatar to server ', async () => {
    document.body.innerHTML = `<form id="myUserForm">
    <input id="avatar" type="file" value = "image.jpg">
            </form>`
    jest.spyOn(userApi, 'changeAvatar')
    jest.spyOn(store, 'setState')
    await changeAvatar()
    expect(userApi.changeAvatar).toHaveBeenCalledTimes(1)
    expect(store.setState).toHaveBeenCalledTimes(3)
    expect(store.getState().user.avatar).toBe('avatar1')
  })
})
