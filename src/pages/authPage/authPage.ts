import Block from '../../utils/Block'
import './authPage.css'
import userAuth from '../../data/userAuth'
import userSignInController from '../../controllers/auth/signInUser'
import { router } from '../../index'
import { connect } from '../../utils/helper/connect'
import type { AppState } from 'store/defaultState'

class AuthPage extends Block<Indexed> {
  static componentName = 'AuthPage'
  constructor () {
    super({})
    this.setProps({
      gotoReg: () => this.gotoReg(),
      onSubmit: async (e: Event) => {
        e.preventDefault()
        await userSignInController()
      }
    })
  }

  gotoReg (): void {
    router.go('/registration')
  }

  render (): string {
    if (this.props.isAuth) {
      router.go('/chat')
      throw new Error('You have been authorized')
    } else {
      return `
      <main>
        <div class = "authwindow">
        <h1> Sign in </h1>
        {{#FormForSubmit onSubmit = onSubmit}}
          ${(userAuth.map(val =>
            `{{{ ControlledInput name = "${val.name}"
                onFocus=onFocus
                onInput=onInput
                type = "${val.type}"
                placeholder = "${val.name}"
                description = "${val.description}"
                label = "${val.description}"
                value = ""
                ref = "${val.ref}"}}}`)).join(' ')}

          <div class = "authPageButton">
            {{{ ButtonAccept value = "Enter" type = "submit" }}}
            {{{ ButtonAccept value = "Create account" type = "button" onClick = gotoReg }}}
            {{/FormForSubmit}}
          </div>
        </div>
      </main>
    `
    }
  }
}

function mapStateToProps (state: AppState | Indexed): Indexed {
  return {
    state
  }
}
const withStore = connect(mapStateToProps)

export default withStore(AuthPage)

// <form id = "form" class = "authform" onsubmit = "${this}" >
