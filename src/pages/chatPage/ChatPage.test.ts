import '@testing-library/jest-dom'
import ChatPage from './ChatPage'
import store from 'store/Store'
import mockedRenderDOM from 'test/mockedRenderDOM'
import mockedRegisteredComp from 'test/mockedRegisteredComp'

jest.mock('utils/renderDOM')

describe('pages/ChatPage', () => {
  it('should render ChatPage', () => {
    store.setState('isAuth', true)
    mockedRegisteredComp()
    mockedRenderDOM(new ChatPage(store))
    const chatPageBody = document.querySelector('.ChatPage')
    expect(chatPageBody).toMatchSnapshot()
  })
})
