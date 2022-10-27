import connectWS from './connectWS'
import getTokenWS from './getToketWS'

const webSocketController = async (): Promise<void> => {
  try {
    await getTokenWS().then(() => connectWS())
  } catch (error) {
    console.log(error)
  }
}

export default webSocketController
