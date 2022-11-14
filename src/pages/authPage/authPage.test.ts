import '@testing-library/jest-dom'
import { getByTestId } from '@testing-library/dom'
import AuthPage from './authPage'
import mockedRenderDOM from 'test/mockedRenderDOM'
import store from 'store/Store'
import mockedRegisteredComp from 'test/mockedRegisteredComp'

jest.mock('utils/renderDOM')

beforeEach(() => {
  store.setState('isAuth', true)
  mockedRegisteredComp()
  mockedRenderDOM(new AuthPage(store))
})

describe('pages/Authpage', () => {
  it('should render authPage', () => {
    const authPageBody = document.querySelector('.authwindow')
    expect(authPageBody).toMatchSnapshot()
  })
  it('should render authPageButton element', () => {
    expect(getByTestId(document.body, 'authPageButton')).toBeInTheDocument()
  })
})
