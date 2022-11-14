import { routerApp, router } from './routerApp'
import '@testing-library/jest-dom'
import store from 'store/Store'

jest.mock('utils/renderDOM')

beforeAll(() => {
  const el = document.createElement('div')
  el.innerHTML = `
        <div id="app" class = "app" ></div>`

  global.document = document
  routerApp()
})

describe('router', () => {
  it('should go on page registration', () => {
    router.go('/registration')
    expect(window.location.href).toEqual('http://localhost/registration')
  })
  it('should go on page Auth', () => {
    router.go('/auth')
    expect(window.location.href).toEqual('http://localhost/auth')
  })
  it('should go on page UserInfo', () => {
    store.setState('isAuth', true)
    router.go('/user')
    expect(window.location.href).toEqual('http://localhost/user')
  })
  it('should go on page error 404', () => {
    router.go('/404')
    expect(window.location.href).toEqual('http://localhost/404')
  })
  it('should go on page error 500', () => {
    router.go('/500')
    expect(window.location.href).toEqual('http://localhost/500')
  })
  it('should go on page Chat', () => {
    store.setState('isAuth', true)
    router.go('/chat')
    expect(window.location.href).toEqual('http://localhost/chat')
  })
})
