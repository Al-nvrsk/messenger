import getOwnUserinfo from './getOwnUserinfo'
import '@testing-library/jest-dom'
import store from 'store/Store'

describe('getOwnUserInfo', () => {
  test('should get user Info', async () => {
    jest.spyOn(store, 'setState')
    await getOwnUserinfo()
    expect(store.getState().user.id).toBe(1)
    expect(store.setState).toHaveBeenCalledTimes(3)
  })
})
