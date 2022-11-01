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

interface IncomingProps {
  chats: object[] | null
  isAuth: boolean
  isLoading: boolean
  user: User
  currentChatId: number
  currentChatTitle: string
  currentChatMessages: object[]
}

class ChatPage extends Block<Indexed> {
  static componentName = 'ChatPage'
  constructor (props: IncomingProps) {
    super(props)
    this.setProps({
      gotoUserInfo: () => router.go('/user'),
      createChat: async () => await createNewChat(),
      selectChat: async (e: Event) => await this.onSelectChat(e),
      addUser: async () => await chatsAddUsersController(),
      deleteChat: async () => await chatDeleteController(this.props.currentChatId),
      deleteUser: async () => await deleteUserFromChat(),
      sendMessage: async (e: Event) => await this.sendMessage(e),
      logOut: async (e: Event) => {
        e.preventDefault()
        if (store.getState().token) {
          store.getState().socket?.close()
        }
        await logout()
      }
    })
  }

  async sendMessage (e: Event): Promise<void> {
    e.preventDefault()
    const text = (document.getElementById('message') as HTMLInputElement).value
    if (text !== '') {
      await sendMessage((document.getElementById('message') as HTMLInputElement).value)
        .then(() => ((document.getElementById('message') as HTMLInputElement).value = ''))
    }
  }

  async onSelectChat (e: Event): Promise<void> {
    e.target && store.setState('currentChatId', (e.target as HTMLElement).id)
    const currentChat = this.props.chats?.find((value: Indexed) => (value.id.toString() === store.getState().currentChatId))
    store.setState('currentChatTitle', currentChat?.title)
    if (this.props.currentChatId > 0) {
      await chatGetUsersController((this.props.currentChatId))
        .then(async () => await webSocketController())
    }
  }

  findUser (value: number): string {
    const currentUser = store.getState().currentChatUsers.filter((user: Indexed) =>
      user.id === value
    )
    if (!currentUser[0].display_name) {
      return 'Empty Display Name'
    } else { return currentUser[0].display_name }
  }

  render (): string {
    // if (!this.props.isAuth) {
    //   router.go('/auth')
    //   throw new Error('You have to be authorized')
    // } else {
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
              ${((this.props)?.chats?.map((chat: { title: string, id: number }) =>
                  `{{{chatCard id ="${chat.id}"
                        onClick = selectChat 
                        title="${chat.title}"}}}`).join(' '))}
            </div>
            <div class = "chatPart"> 
              <div class = "logoutButton">
                {{{ButtonChange value = "Logout" onClick=logOut }}}
              </div>
              ${(this.props as AppState).currentChatId
                ? `<div class = "chatPartMessage">
                      <div class = "mainChatting" >
                        <div class = "buttonBar">
                            {{{ ButtonAccept value = "Add user" type = "button" onClick = addUser }}}
                            {{{ ButtonReject value = "Delete user" type = "button" onClick = deleteUser }}}
                            {{{ ButtonReject value = "Delete Chat" type = "button" onClick = deleteChat }}}
                        </div>
                        <div class = "InfoChat">
                          <h3> ${this.props.currentChatTitle}</h3>
                        </div>
                        <div class = "messageCardConteiner">
                          ${(this.props.currentChatMessages?.map(
                            (message: { content: string, id: number, user_id: number }) =>
                            `{{{messageCard content = "${message.content}"
                                        userId = "${message.user_id === store.getState().user.id
                                          ? 'My'
                                          : `${this.findUser(message.user_id)}`}"}}}`).join(' '))}
                        </div>
                        
                        <div class="inputMessageConteiner">
                        {{#FormForSubmit onSubmit = sendMessage}}
                          <div class = "inputSubmit">
                          <input class = "inputMessage"
                                  name = "message" 
                                  type = "text" 
                                  placeholder = 
                                  'Input message' 
                                  ref = "inputMessageRef" 
                                  value='' 
                                  id="message" />
                          {{{ ButtonAccept value = "send" type = "submit"}}}
                          </div>
                          {{/FormForSubmit}}
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
  // }
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
