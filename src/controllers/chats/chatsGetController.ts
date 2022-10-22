import ChatAPI from '../../api/chat-api'
import store from '../../store/Store'

const chatsApi = new ChatAPI()
const defaultquery = {
  offset: 0,
  limit: 15
}

class ChatsGetController {
  public async getChats (data: Indexed = defaultquery): Promise<any> {
    try {
      // store.setState('isLoading', true)// Запускаем крутилку
      await chatsApi.getChats(data)
        .then((data: ResponseData) => data.response && store.setState('chats', JSON.parse(data.response)))
    } catch (error) {
      console.log(error)
    }
  }
}

const chatsGetController = new ChatsGetController()

export default chatsGetController
