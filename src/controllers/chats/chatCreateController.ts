import ChatAPI from '../../api/chat-api'

const chatsApi = new ChatAPI()

class ChatsCreateController {
  public async createChat (newtitle: string): Promise<any> {
    try {
      // store.setState('isLoading', true)// Запускаем крутилку
      const message = {
        title: newtitle
      }
      await chatsApi.createChats(JSON.stringify(message))
    } catch (error) {
      console.log(error)
      // Логика обработки ошибок
    }
  }
}

const createNewChat = new ChatsCreateController()

export default createNewChat
