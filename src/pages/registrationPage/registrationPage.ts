import Block from 'utils/Block'
import './registrationPage.css'
import userRegistration from 'data/userRegistration'
import submitForm from 'utils/helper/submitForm'

export default class RegistrationPage extends Block {
  static componentName = 'RegistrationPage'
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
        {{{ Navigation adress = "./index.html" value = "Go to Content list"}}}
        {{{ Navigation adress = "./authPage.html" value ="Sign in"}}}
      </div>
    </form>
  </div>
  `
  }
}
