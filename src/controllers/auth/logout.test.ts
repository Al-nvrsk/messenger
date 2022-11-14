import logout from './logout'
import '@testing-library/jest-dom'
import store from 'store/Store'
import loginApi from 'api/loginAPI'
import { router } from 'router/routerApp'

describe('logout', () => {
  test('should return all chains of logout ', async () => {
    jest.spyOn(router, 'go').mockImplementationOnce(() => {})
    jest.spyOn(loginApi, 'logout')
    jest.spyOn(store, 'setState')
    await logout()
    expect(loginApi.logout).toHaveBeenCalledTimes(1)
    expect(router.go).toHaveBeenCalledTimes(1)
    expect(store.setState).toHaveBeenCalledTimes(1)
  })
})
