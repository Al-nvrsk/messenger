import store from 'store/Store'

const sendMessage = async (message: string): Promise<void> => {
  const query = {
    content: message,
    type: 'message'
  }
  try {
    store.getState().socket?.send(JSON.stringify(query))
  } catch (err) {
    console.log(err)
  }
}

export default sendMessage
