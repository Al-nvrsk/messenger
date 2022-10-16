import queryStringify from './helper/queryStringify'

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
};

interface Options {
  method?: Methods
  data?: any
  timeout?: number
  headers?: string
}

class HTTPTransport {
  get = async (url: string, options: Options = {}): Promise<object> => {
    if (options.data) {
      url = `${url}${queryStringify(options.data)}`
    }
    return await this.request(url, { ...options, method: Methods.GET }, options.timeout)
  }

  post = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: Methods.POST }, options.timeout)
  }

  put = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: Methods.PUT }, options.timeout)
  }

  delete = async (url: string, options: Options = {}): Promise<object> => {
    return await this.request(url, { ...options, method: Methods.DELETE }, options.timeout)
  }

  request = async (url: string, options: Options = {}, timeout = 5000): Promise<object> => {
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
        xhr.send(data)
      }
    })
  }
}
