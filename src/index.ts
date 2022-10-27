import registerComponent from 'utils/registerComponent'
import Router from './router/Router'
import './styles/app.css'

// Components
import ButtonAccept from 'components/buttons/buttonAccept/buttonAccept'
import ButtonReject from 'components/buttons/buttonReject/buttonReject'
import ButtonReturn from 'components/buttons/buttonReturn/buttonReturn'
import ButtonChange from 'components/buttons/buttonChange/buttonChange'
import Navigation from 'components/navigation/Navigation'
import InputSearch from 'components/inputs/inputSearch/InputSearch'
import InputBase from 'components/inputs/inputBase/inputBase'
import errorBase from 'components/inputs/errorBase/errorBase'
import ControlledInput from 'components/inputs/controlledInput/controlledInput'
import UserStat from 'components/userStat/userStat'
import chatCard from 'components/chatCard/chatCard'
import modalChangeAvatar from 'components/modalsWindow/modalChangeAvatar/modalChangeAvatar'
import modalChangePassword from 'components/modalsWindow/modalChangePassword/modalChangePassword'
import modalChangeUserInfo from 'components/modalsWindow/modalChangeUserInfo/modalChangeUserInfo'
import messageCard from 'components/messageCard/messageCard'

// Pages
import AuthPage from 'pages/authPage/authPage'
import RegistrationPage from 'pages/registrationPage/registrationPage'
import UserInfoPage from 'pages/userInfoPage/UserInfoPage'
import Error404Page from 'pages/errorPages/Error404Page'
import Error500Page from 'pages/errorPages/Error500Page'
import ChatPage from 'pages/chatPage/ChatPage'

registerComponent(ButtonAccept)
registerComponent(ButtonReject)
registerComponent(ButtonReturn)
registerComponent(ButtonChange)
registerComponent(Navigation)
registerComponent(InputSearch)
registerComponent(InputBase)
registerComponent(errorBase)
registerComponent(ControlledInput)
registerComponent(UserStat)
registerComponent(chatCard)
registerComponent(modalChangeAvatar)
registerComponent(modalChangePassword)
registerComponent(modalChangeUserInfo)
registerComponent(messageCard)

export const router = new Router('.app')

router
  .use('/auth', AuthPage)
  .use('/registration', RegistrationPage)
  .use('/user', UserInfoPage)
  .use('/404', Error404Page)
  .use('/500', Error500Page)
  .use('/chat', ChatPage)
  .use('*', Error404Page)
  .start()
