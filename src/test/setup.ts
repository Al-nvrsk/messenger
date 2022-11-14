import { server } from './mockedApi'
import '@testing-library/jest-dom'

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  jest.resetModules()
  jest.restoreAllMocks()
  jest.resetAllMocks()
})
afterAll(() => {
  server.close()
})
