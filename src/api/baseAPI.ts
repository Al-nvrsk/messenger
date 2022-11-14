export const BASE_URL = 'https://ya-praktikum.tech/api/v2'

export const err = new Error('empty request')

export class BaseAPI {
  async create (_user: string): Promise<object> { throw new Error('Not implemented') }

  request (): void { throw new Error('Not implemented') }

  update (): void { throw new Error('Not implemented') }

  delete (): void { throw new Error('Not implemented') }
}
