import Block from 'utils/Block'
import './ChatPage.css'
import UserCreateController from '../../controllers/auth/userCreateController'
import { router } from '../../index'
import createNewChat from '../../controllers/chats/chatCreateController'
import chatsGetController from '../../controllers/chats/chatsGetController'
import type { AppState } from 'store/defaultState'
import { connect } from '../../utils/helper/connect'
import store from '../../store/Store'

const controller = new UserCreateController()

class ChatPage extends Block {
  static componentName = 'ChatPage'
  constructor (props: any) {
    super(props)
    this.setProps({
      gotoUserInfo: () => this.gotoUserInfo(),
      createChat: async () => await this.createChat(),
      onClick: async (e: Event) => {
        e.preventDefault()
        await controller.logout()
      },
      onSelectChat: (e: Event) => store.setState('currentChatId', e.target.id)
    })
  }

  gotoUserInfo (): void {
    router.go('/user')
  }

  async createChat (): Promise<void> {
    const newChatName = prompt('Input chat name')
    newChatName && await createNewChat.createChat(newChatName)
      .then(async () => await chatsGetController.getChats())
  }

  render (): string {
    console.log(this.props)
    // if (!this.props.isAuth) {
    //   router.go('/auth')
    //   throw new Error('You have to be authorized')
    // } else {
    return `
        <main>
        <div class = "ChatPage">

          <div class = "userList" >
          {{{ButtonChange value = "Create new chat" onClick=createChat }}}
          {{{ButtonChange value = "UserInfo" onClick=gotoUserInfo }}}

            {{{ InputSearch 
            name = "search"
            type = "search"
            placeholder = "search"}}}
            ${(this.props.chats?.map((chat: { title: string, id: number }) =>
            `{{{chatCard id="${chat.id}"
                  onClick = onSelectChat 
                  title="${chat.title}"}}}`).join(' '))}
          </div>

          <div class = "chatPart"> 
          <div class = "logoutButton">
              {{{ButtonChange value = "logout" onClick=onClick }}}
            </div>
            <div class = "chatPartMessage">
              
            <h2> Select user for chating... </h2>
            <h3> Current chat Id = ${this.props.currentChatId}</h3>
            </div>
          </div>
    
        </div>
      </main>
    `
  }
  // }
}

function mapStateToProps (state: AppState | Indexed): Indexed {
  return {
    chats: state.chats,
    isAuth: state.isAuth,
    isLoading: state.isLoading,
    user: state.user,
    currentChatId: state.currentChatId
  }
}
const withStore = connect(mapStateToProps)

export default withStore(ChatPage)
