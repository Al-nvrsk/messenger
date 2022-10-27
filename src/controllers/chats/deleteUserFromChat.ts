import chatsApi from '../../api/chatAPI'
import store from '../../store/Store'
import chatGetUsersController from './getUsersFromChat'

const deleteUserFromChat = async (): Promise<void> => {
  const userId = prompt('Input userId for delete')
  const usersArray = userId?.split(',')
  usersArray?.map(value => value.trim())
  const query = {
    users: usersArray,
    chatId: store.getState().currentChatId
  }
  if (userId) {
    try {
      await chatsApi.deleteUser(JSON.stringify(query))
        .then(async () => await chatGetUsersController(query.chatId))
    } catch (error) {
      console.log(error)
    }
  }
}

export default deleteUserFromChat
