import Block from 'utils/Block'
import './ChatPage.css'
import { router } from '../../index'
import createNewChat from '../../controllers/chats/createNewChat'
import type { AppState } from 'store/defaultState'
import { connect } from '../../utils/helper/connect'
import store from '../../store/Store'
import chatsAddUsersController from '../../controllers/chats/addUsersToChat'
import chatGetUsersController from '../../controllers/chats/getUsersFromChat'
import chatDeleteController from '../../controllers/chats/deleteChat'
import deleteUserFromChat from '../../controllers/chats/deleteUserFromChat'
import webSocketController from '../../controllers/webSocket/webSocketController'
import sendMessage from '../../controllers/webSocket/sendMessage'
import logout from '../../controllers/auth/logout'

class ChatPage extends Block {
  static componentName = 'ChatPage'
  constructor (props: any) {
    super(props)
    this.setProps({
      gotoUserInfo: () => router.go('/user'),
      createChat: async () => await createNewChat(),
      SelectChat: async (e: Event) => await this.onSelectChat(e),
      AddUser: async () => await chatsAddUsersController(),
      DeleteChat: async () => await chatDeleteController(this.props.currentChatId),
      DeleteUser: async () => await deleteUserFromChat(),
      SendMessage: async () => await sendMessage((document.getElementById('message') as HTMLInputElement).value)
        .then(() => ((document.getElementById('message') as HTMLInputElement).value = '')),
      LogOut: async (e: Event) => {
        e.preventDefault()
        if (store.getState().token) {
          store.getState().socket.close()
        }
        await logout()
      }
    })
  }

  async onSelectChat (e: Event): Promise<void> {
    e.target && store.setState('currentChatId', (e.target as HTMLElement).id)
    const currentChat = this.props.chats.find((value: Indexed) => (value.id == store.getState().currentChatId))
    store.setState('currentChatTitle', currentChat.title)
    if (this.props.currentChatId > 0) {
      await chatGetUsersController(this.props.currentChatId)
        .then(async () => await webSocketController())
    }
  }

  render (): string {
    if (!this.props.isAuth) {
      router.go('/auth')
      throw new Error('You have to be authorized')
    } else {
      return `
        <main>
          <div class = "ChatPage">
            <div class = "userList" >
              <div class = "userListBar">
                {{{ButtonChange value = "Create new chat" onClick=createChat }}}
                {{{ButtonChange value = "UserInfo" onClick=gotoUserInfo }}}
              </div>  
              {{{ InputSearch 
                  name = "search"
                  type = "search"
                  placeholder = "search"}}}
              ${(this.props.chats?.map((chat: { title: string, id: number }) =>
                  `{{{chatCard id ="${chat.id}"
                        onClick = SelectChat 
                        title="${chat.title}"}}}`).join(' '))}
            </div>
            <div class = "chatPart"> 
              <div class = "logoutButton">
                {{{ButtonChange value = "Logout" onClick=LogOut }}}
              </div>
              ${this.props.currentChatId
                ? `<div class = "chatPartMessage">
                      <div class = "mainChatting" >
                        <div class = "buttonBar">
                            {{{ ButtonAccept value = "Add user" type = "button" onClick = AddUser }}}
                            {{{ ButtonReject value = "Delete user" type = "button" onClick = DeleteUser }}}
                            {{{ ButtonReject value = "Delete Chat" type = "button" onClick = DeleteChat }}}
                        </div>
                        <div class = "InfoChat">
                          <h3> ${this.props.currentChatTitle}</h3>
                        </div>
                        <div class = "messageCardConteiner">
                          ${(this.props.currentChatMessages?.map(
                            (message: { content: string, id: number, user_id: number }) =>
                            `{{{messageCard content = "${message.content}"
                                        userId = "${message.user_id}"}}}`).join(' '))}
                        </div>
                        <div class="inputMessageConteiner">
                          <input class = "inputMessage"
                                  name = "message" 
                                  type = "text" 
                                  placeholder = 
                                  'Input message' 
                                  ref = "inputMessageRef" 
                                  value='' 
                                  id="message" />
                          {{{ ButtonAccept value = "send" type = "button" onClick = SendMessage }}}
                        </div>
                      </div>
                </div>`
              : `<div class = "emptyField">
                  Select Chat for chating...
                </div>`
              }
            </div>
          </div>
        </main>
      `
    }
  }
}

function mapStateToProps (state: AppState | Indexed): Indexed {
  return {
    chats: state.chats,
    isAuth: state.isAuth,
    isLoading: state.isLoading,
    user: state.user,
    currentChatId: state.currentChatId,
    currentChatTitle: state.currentChatTitle,
    currentChatMessages: state.currentChatMessages
  }
}
const withStore = connect(mapStateToProps)

export default withStore(ChatPage)
