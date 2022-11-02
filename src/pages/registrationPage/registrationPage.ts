import Block from 'utils/Block'
import './registrationPage.css'
import userRegistration from 'data/userRegistration'
import { router } from '../../index'
import userCreateController from '../../controllers/auth/createUser'
import store from '../../store/Store'

export default class RegistrationPage extends Block<Indexed> {
  static componentName = 'RegistrationPage'
  constructor () {
    super()
    this.setProps({
      store: store.getState(),
      gotoAuth: () => this.gotoAuth(),
      onSubmit: async (e: Event) => {
        e.preventDefault()

        try {
          await userCreateController()
          router.go('/auth')
          alert('User have been create')
        } catch (err) { console.log(err) }
      }
    })
  }

  gotoAuth (): void {
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
      {{#FormForSubmit onSubmit = onSubmit}}
              
      ${(userRegistration.map(val =>
          `{{{ ControlledInput name = "${val.name}"
                    onFocus=onFocus
                    onInput=onInput
                    type = "${val.type}"
                    placeholder = "${val.name}"
                    description = "${val.description}"
                    label = "${val.description}"
                    value = ""
                    ref = "${val.ref}"}}}`)).join(' ')}
                    
      <div class = "registrationwindowButton">
        {{{ ButtonAccept value = "Registration" type = "submit" }}}
        {{{ ButtonAccept value = "Sign in" type = "button" onClick = gotoAuth }}}
        </div>
        {{/FormForSubmit}}
  </div>
  `
    }
  }
}
