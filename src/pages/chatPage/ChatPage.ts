import Block from 'utils/Block'
import './ChatPage.css'

export default class ChatPage extends Block {
  static componentName = 'ChatPage'
  render (): string {
    return `
      <main>
        <div class = "ChatPage">

          <div class = "userList" >
            <a href = "UserInfoPage.hbs"> Profile </a>
            {{{ InputSearch 
            name = "search"
            type = "search"
            placeholder = "search"}}}
          </div>

          <div class = "chatPart"> 
            <div class = "chatPartMessage">
              <h2> Select user for chating... </h2>
            </div>
          </div>
    
        </div>
      </main>
    `
  }
}
