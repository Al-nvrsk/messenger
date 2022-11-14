import Router from './Router'
import AuthPage from 'pages/authPage/authPage'
import RegistrationPage from 'pages/registrationPage/registrationPage'
import UserInfoPage from 'pages/userInfoPage/UserInfoPage'
import Error404Page from 'pages/errorPages/Error404Page'
import Error500Page from 'pages/errorPages/Error500Page'
import ChatPage from 'pages/chatPage/ChatPage'

export const router = new Router('.app')

export const routerApp = (): void => {
  router
    .use('/auth', AuthPage)
    .use('/registration', RegistrationPage)
    .use('/user', UserInfoPage)
    .use('/404', Error404Page)
    .use('/500', Error500Page)
    .use('/chat', ChatPage)
    .use('*', Error404Page)
    .start()
}
