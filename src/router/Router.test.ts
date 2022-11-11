import Router from './Router'
import '@testing-library/jest-dom'
import Block from '../utils/Block'

jest.mock('../utils/renderDOM')

describe('router', () => {
  it('should go on page registration', () => {
    const el = document.createElement('div')
    el.innerHTML = `
        <div id="app" class = "app" ></div>`

    global.document = document
    const router = new Router('.app')
    router
      .use('/404', Block)
      .use('/registration', Block)
    router.go('/registration')
    expect(window.location.href).toEqual('http://localhost/registration')
  })
})
