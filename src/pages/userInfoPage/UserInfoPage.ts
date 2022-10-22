import Block from 'utils/Block'
import './UserInfoPage.css'
import store from '../../store/Store'

import userInfoPageStatus from 'data/userInfoPageStatus'
import userInfoPageButtons from 'data/userInfoPageButtons'
import { router } from '../../index'

class UserInfoPage extends Block {
  static componentName = 'UserInfoPage'
  constructor () {
    super()
    console.log(this.props)
    this.setProps({
      store: store.getState(),
      gotoBack: () => this.gotoBack()
    })
  }

  gotoBack (): void {
    router.back()
  }

  render (): string {
    console.log(this.props)
    if (!store.getState().isAuth) {
      router.go('/auth')
      throw new Error('You have to be authorized')
    } else {
      return `
      <main>
        <div class = "mainUserInfoPage">
          {{{ButtonReturn onClick=gotoBack }}}
            <div class = "userinfopage">
              <img src = "../../assets/default_user.png" alt = "avatar">
    
              ${(userInfoPageStatus.map(val =>
                  `{{{ UserStat 
                      name = "${val.name}"
                      value = "${store.getState().user[val.name]}"}}}`)).join(' ')}
      
            </div>
            <div class = "userInfoPageBlock">

              ${(userInfoPageButtons.map(val =>
                  `{{{ButtonChange value = "${val}" }}}`)).join(' ')}
    
                  {{{ ButtonReject value = "Exit" type = "button" onClick=gotoBack }}}
                  
            </div>
        </div>
      </main>
    `
    }
  }
}

export default UserInfoPage
