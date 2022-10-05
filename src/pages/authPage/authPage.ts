import Block from '../../utils/Block'
import './authPage.css'
import submitForm from 'utils/helper/submitForm'
import userAuth from '../../data/userAuth'

export default class AuthPage extends Block {
  static componentName = 'AuthPage'
  constructor () {
    super()
    this.setProps({
      onClick: (e) => {
        e.preventDefault()
        submitForm()
      }
    })
  }

  render (): string {
    return `
      <main>
        <div class = "authwindow">
        <h1> Sign in </h1>
        <form class = "authform">
          ${(userAuth.map(val =>
            `{{{ ControlledInput name = "${val.name}"
                onFocus=onFocus
                onInput=onInput
                type = "${val.type}"
                placeholder = "${val.name}"
                description = "${val.description}"
                label = "${val.description}"
                ref = "${val.ref}"}}}`)).join(' ')}

          <div class = "authPageButton">
            {{{ ButtonAccept value = "Enter" type = "submit" onClick = onClick }}}
            {{{ Navigation adress = "./RegistrationPage.html" value = "Create account"}}}
            {{{ Navigation adress = "./index.hbs" value = "Go to Content list"}}}
          </div>
        </form>
        </div>
      </main>
    `
  }
}
