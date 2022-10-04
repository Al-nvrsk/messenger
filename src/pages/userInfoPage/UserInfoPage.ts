import Block from 'utils/Block'
import './userInfoPage.css'

import userInfoPageStatus from 'data/userInfoPageStatus'
import userInfoPageButtons from 'data/userInfoPageButtons'

export default class UserInfoPage extends Block {
  render (): string {
    return `
    <main>
  <div class = "mainUserInfoPage">
    {{{ButtonReturn adress = "authpage.html" }}}
      <div class = "userinfopage">
        <img src = "../../assets/default_user.png" alt = "avatar">
    
        ${(userInfoPageStatus.map(val =>
            `{{{ UserStat 
                name = "${val.name}"
                value = "${val.value}"}}}`)).join(' ')}
      
      </div>
      <div class = "userInfoPageBlock">

      ${(userInfoPageButtons.map(val =>
        `{{{ButtonChange value = "${val}" }}}`)).join(' ')}
    
        {{{ ButtonReject value = "Exit" type = "button"}}}
        {{{ Navigation adress = "./index.hbs" value = "Go to Content list"}}}
      </div>
  </div>
</main>
    `
  }
}
