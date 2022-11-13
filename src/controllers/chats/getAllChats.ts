import chatsApi from 'api/chatAPI'
import store from 'store/Store'

const defaultquery = {
  offset: 0,
  limit: 15
}

const getAllChats = async (data: Indexed = defaultquery): Promise<void> => {
  try {
    await chatsApi.getChats(data)
      .then((data: ResponseData) => data.response && store.setState('chats', JSON.parse(data.response)))
  } catch (error) {
    console.log(error)
  }
}

export default getAllChats
