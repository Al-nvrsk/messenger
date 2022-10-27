import chatsApi from '../../api/chatAPI'
import store from '../../store/Store'

const defaultQuery = {
  id: 0,
  offset: 0,
  limit: 15,
  name: '',
  email: ''
}

const getUsersFromChat = async (chatId: number, query: Indexed = defaultQuery): Promise<any> => {
  query.id = chatId
  try {
    await chatsApi.getChatUsers(query)
      .then((data: ResponseData) => data.response && store.setState('currentChatUsers', JSON.parse(data.response)))
  } catch (error) {
    console.log(error)
  }
}

export default getUsersFromChat
