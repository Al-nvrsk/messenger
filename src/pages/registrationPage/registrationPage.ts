import Block from 'utils/Block'
import './registrationPage.css'
import userRegistration from 'data/userRegistration'
import submitForm from 'utils/helper/submitForm'
import { router } from '../../index'
import UserCreateController from '../../controllers/auth/userCreateController'
import store from '../../store/Store'

export default class RegistrationPage extends Block {
  static componentName = 'RegistrationPage'
  constructor () {
    super()
    this.setProps({
      store: store.getState(),
      gotoAuth: () => this.gotoAuth(),
      onClick: async (e: Event) => {
        e.preventDefault()
        submitForm()
        const userController = new UserCreateController()
        try {
          await userController.create(store.getState().user)
          router.go('/auth')
          alert('User have been create')
        } catch (err) { console.log(err) }
      }
    })
  }

  gotoAuth (): void {
    console.log('tryGo')
    router.go('/auth')
  }

  render (): string {
    if (store.getState().isAuth) {
      router.go('/chat')
      throw new Error('You have user account')
    } else {
      return ` 
    <div class = "registrationwindow">
      <h1 class = "header"> Create new user </h1>
      <form class = "registrationform">
              
      ${(userRegistration.map(val =>
          `{{{ ControlledInput name = "${val.name}"
                    onFocus=onFocus
                    onInput=onInput
                    type = "${val.type}"
                    placeholder = "${val.name}"
                    description = "${val.description}"
                    label = "${val.description}"
                    ref = "${val.ref}"}}}`)).join(' ')}
                    
      <div class = "registrationwindowButton">
        {{{ ButtonAccept value = "Registration" type = "submit" onClick = onClick }}}
        {{{ ButtonAccept value = "Sign in" type = "button" onClick = gotoAuth }}}
        </div>
    </form>
  </div>
  `
    }
  }
}
