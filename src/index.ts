import renderDOM from 'utils/renderDOM'
import registerComponent from 'utils/registerComponent'

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

// Pages. Work once at a time. All pages will work after routing realese
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

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new RegistrationPage())
})
