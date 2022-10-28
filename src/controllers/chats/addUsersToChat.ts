import chatsApi from '../../api/chatAPI'
import store from '../../store/Store'

const addUsersToChat = async (): Promise<any> => {
  const users = prompt('Input userId for add to chat')
  const userArr = users?.split(',')
  userArr?.map(user => user.trim())
  const sendData = {
    users: userArr,
    chatId: store.getState().currentChatId
  }
  try {
    await chatsApi.addUser(JSON.stringify(sendData))
  } catch (error) {
    console.log('Error:', error)
  }
}

export default addUsersToChat
