import queryStringify from './helper/queryStringify'

type HTTPMethod = (url: string, options?: Options) => Promise<object>

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
};

interface Options {
  method?: Methods
  data?: string | Indexed
  timeout?: number
  headers?: object
}

const headerJson = { 'Content-type': 'application/json' }

class HTTPTransport {
  get: HTTPMethod = async (url, options = {}) => {
    if (options.data && typeof options.data === 'object') {
      url = `${url}?${queryStringify(options.data)}`
    }
    return await this.request(url, { ...options, method: Methods.GET }, options.timeout)
  }

  post: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: Methods.POST }, options.timeout)
  }

  put: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: Methods.PUT }, options.timeout)
  }

  delete: HTTPMethod = async (url, options = {}) => {
    return await this.request(url, { ...options, method: Methods.DELETE }, options.timeout)
  }

  request = async (url: string, options: Options = {}, timeout: number = 5000): Promise<object> => {
    const { headers = {}, method, data } = options

    return await new Promise(function (resolve, reject) {
      if (!method) {
        reject(new Error('No method'))
        return
      }

      const xhr = new XMLHttpRequest()

      xhr.open(
        method,
        url
      )

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key as keyof object])
      })
      xhr.withCredentials = true
      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (!data) {
        xhr.send()
      } else {
        xhr.send(data as string)
      }
    })
  }
}

export { HTTPTransport, headerJson }
