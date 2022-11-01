import store from '../../store/Store'

function connectWS (): WebSocket {
  const userId = store.getState().user.id
  const chatId = store.getState().currentChatId
  const token = store.getState().token
  const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)

  let timerId: number | NodeJS.Timeout = 0

  function keepAlive (): void {
    const timeout = 20000
    if (socket.readyState === socket.OPEN) {
      socket.send(JSON.stringify({ type: 'ping' }))
    }
    timerId = setTimeout(keepAlive, timeout)
  }

  socket.addEventListener('open', () => {
    console.log('Соединение установлено')
    keepAlive()
    store.setState('currentChatMessages', [])
    store.getState().socket?.send(JSON.stringify({
      content: '0',
      type: 'get old'
    }))
  })

  socket.addEventListener('close', event => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто')
    } else {
      console.log('Обрыв соединения')
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`)
  })

  socket.addEventListener('message', event => {
    try {
      console.log('Получены данные', event.data)
      let message = JSON.parse(event.data)
      if (!Array.isArray(message)) {
        message = [message]
      }
      const filtered = message.filter((message: Indexed) => message.type === 'message')
      store.setState('currentChatMessages', [...filtered, ...store.getState().currentChatMessages])
    } catch (err) {
      console.log(err)
    }
  })

  socket.addEventListener('error', event => {
    console.log('Ошибка', event)
  })

  store.setState('socket', socket)

  return socket
}

export default connectWS
