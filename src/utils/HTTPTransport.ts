enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
};

interface Options {
  method?: METHODS
  data?: any
  timeout?: number
  headers?: string
}

function queryStringify (data: object): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object')
  }

  const keys = Object.keys(data)
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
  }, '?')
}

class HTTPTransport {
  get = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: METHODS.GET }, options.timeout)
  }

  post = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: METHODS.POST }, options.timeout)
  }

  put = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: METHODS.PUT }, options.timeout)
  }

  delete = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: METHODS.DELETE }, options.timeout)
  }

  request = async (url: string, options: Options = {}, timeout = 5000): Promise<object> => {
    const { headers = {}, method, data } = options

    return await new Promise(function (resolve, reject) {
      if (!method) {
        reject(new Error('No method'))
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === METHODS.GET

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url
      )

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject

      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}
