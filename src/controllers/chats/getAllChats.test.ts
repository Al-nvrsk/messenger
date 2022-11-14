import getAllChats from './getAllChats'
import '@testing-library/jest-dom'
import store from 'store/Store'
import chatApi from 'api/chatAPI'

describe('getAllChats', () => {
  test('should return all chains of getAllChats to server ', async () => {
    const mockquery = {
      offset: 10,
      limit: 10
    }
    jest.spyOn(chatApi, 'getChats')
    jest.spyOn(store, 'setState')
    await getAllChats(mockquery)
    expect(chatApi.getChats).toHaveBeenCalledWith(mockquery)
    expect(store.setState).toHaveBeenCalledTimes(1)
  })
})
