import Block from 'utils/Block'
import './UserInfoPage.css'
import type { AppState } from 'store/defaultState'
import { connect } from '../../utils/helper/connect'
import userInfoPageStatus from 'data/userInfoPageStatus'
import userInfoPageButtons from 'data/userInfoPageButtons'
import { router } from '../../index'
import store from '../../store/Store'

class UserInfoPage extends Block {
  static componentName = 'UserInfoPage'
  constructor (props: any) {
    super(props)
    this.setProps({
      store: store.getState,
      gotoBack: () => this.gotoBack(),
      // onHide: this.props.state
      onShow: () => store.setState('isModalActive', true)
    })
  }

  gotoBack (): void {
    router.back()
  }

  render (): string {
    console.log('UserInfoPage', this.props)
    // if (!this.props.isAuth) {
    //   router.go('/auth')
    //   throw new Error('You have to be authorized')
    // } else {
      let path = ''
      if (this.props.user) {
        console.log('avatar path=', this.props.user.avatar)
        path = process.env.URL+ '/auth/user' + this.props.user.avatar
        console.log('path=', path)
      }
    return `
      <main>
      {{{ modalWindow active = ${this.props.isModalActive} setActive = ${this.props} }}}
        <div class = "mainUserInfoPage">
          {{{ButtonReturn onClick=gotoBack }}}
            <div class = "userinfopage">
              <img src = "${path}" alt = "avatar">
    
              ${this.props.user && (userInfoPageStatus?.map(val =>
                  `{{{ UserStat 
                      name = "${val.name}"
                      value = "${this.props.user[val.name]}"}}}`)).join(' ')}
      
            </div>
            <div class = "userInfoPageBlock">

              ${(userInfoPageButtons.map(val =>
                  `{{{ButtonChange value = "${val}" }}}`)).join(' ')}
                  
                  {{{ ButtonReject value = "Hide" type = "button" onClick=onHide }}}
                  {{{ ButtonReject value = "Show" type = "button" onClick=onShow }}}
                  {{{ ButtonReject value = "Exit" type = "button" onClick=gotoBack }}}
                  
            </div>
        </div>
        
        
      </main>
    `
    // }
  }
}

function mapStateToProps (state: AppState | Indexed): Indexed {
  return {
    user: state.user,
    isModalActive: state.isModalActive
  }
}
const withStore = connect(mapStateToProps)

export default withStore(UserInfoPage)
