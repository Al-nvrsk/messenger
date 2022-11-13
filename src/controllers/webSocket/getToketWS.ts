import webSocketAPI from 'api/webSocketAPI'
import store from 'store/Store'

const getTokenWS = async (): Promise<void> => {
  const chatId = store.getState().currentChatId
  if (chatId > 0) {
    try {
      await webSocketAPI.getToken(chatId.toString())
        .then(data => JSON.parse(data.response))
        .then(data => {
          store.setState('token', data.token)
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export default getTokenWS
