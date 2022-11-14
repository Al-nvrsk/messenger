import '@testing-library/jest-dom'
import UserInfoPage from './UserInfoPage'
import store from 'store/Store'
import mockedRenderDOM from 'test/mockedRenderDOM'
import mockedRegisteredComp from 'test/mockedRegisteredComp'

jest.mock('utils/renderDOM')

const testUser = {
  email: 'user@test.ru',
  first_name: 'User',
  login: 'User',
  display_name: 'User',
  phone: '1234567890',
  second_name: 'UserUser'
}

describe('pages/userInfoPage', () => {
  it('should render userInfoPage', () => {
    store.setState('isAuth', true)
    store.setState('user', testUser)
    mockedRegisteredComp()
    mockedRenderDOM(new UserInfoPage(store))
    const UserInfoPageBody = document.querySelector('.userInfoPage')
    expect(UserInfoPageBody).toMatchSnapshot()
  })
})
