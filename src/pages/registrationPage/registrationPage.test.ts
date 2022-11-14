import '@testing-library/jest-dom'
import RegistrationPage from './registrationPage'
import mockedRenderDOM from 'test/mockedRenderDOM'
import mockedRegisteredComp from 'test/mockedRegisteredComp'

jest.mock('utils/renderDOM')

describe('pages/registrationPage', () => {
  it('should render registrationPage', () => {
    mockedRegisteredComp()
    mockedRenderDOM(new RegistrationPage())
    const registrationPageBody = document.querySelector('.registrationwindow')
    expect(registrationPageBody).toMatchSnapshot()
  })
})
