import Block from '../../utils/Block'
import './authPage.css'
import userAuth from '../../data/userAuth'
import userSignInController from '../../controllers/auth/signInUser'
import { router } from '../../index'
import { connect } from '../../utils/helper/connect'
import type { AppState } from 'store/defaultState'

class AuthPage extends Block {
  static componentName = 'AuthPage'
  constructor (props: any) {
    super(props)
    this.setProps({
      gotoReg: () => this.gotoReg(),
      signIn: async (e: Event) => {
        e.preventDefault()
        await this.signIn()
      }
    })
  }

  async signIn (): Promise<void> {
    await userSignInController()
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
        <form class = "authform">
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
            {{{ ButtonAccept value = "Enter" type = "submit" onClick = signIn }}}
            {{{ ButtonAccept value = "Create account" type = "button" onClick = gotoReg }}}
            
            
          </div>
        </form>
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
