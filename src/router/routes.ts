import AuthPage from 'pages/authPage/authPage'
import ChatPage from 'pages/chatPage/ChatPage'
import Error404Page from 'pages/errorPages/Error404Page'
import RegistrationPage from 'pages/registrationPage/registrationPage'
import UserInfoPage from 'pages/userInfoPage/UserInfoPage'

const routes = [
  {
    path: '/auth',
    block: AuthPage,
    shouldAuthorized: false
  },
  {
    path: '/registration',
    block: new RegistrationPage(),
    shouldAuthorized: false
  },
  {
    path: '/chat',
    block: ChatPage,
    shouldAuthorized: true
  },
  {
    path: '/profile',
    block: UserInfoPage,
    shouldAuthorized: true
  },
  {
    path: '*',
    block: new Error404Page(),
    shouldAuthorized: false
  }
]

export default routes
