export const BASE_URL = 'https://ya-praktikum.tech/api/v2'

export class BaseAPI {
  create (user: Indexed): void { throw new Error('Not implemented') }

  request (): void { throw new Error('Not implemented') }

  update (user: Indexed): void { throw new Error('Not implemented') }

  delete (): void { throw new Error('Not implemented') }
}
