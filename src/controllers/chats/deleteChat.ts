import chatsApi from '../../api/chatAPI'
import store from '../../store/Store'
import chatsGetController from './getAllChats'

const deleteChat = async (id: any): Promise<void> => {
  const ready = confirm('Are you sure want delete this chat')
  const query = {
    chatId: id
  }
  if (ready) {
    try {
      await chatsApi.deleteChat(JSON.stringify(query))
        .then(() => store.setState('currenChatId', 0))
        .then(async () => await chatsGetController())
    } catch (error) {
      console.log(error)
    }
  }
}

export default deleteChat
