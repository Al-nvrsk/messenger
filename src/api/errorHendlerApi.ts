const errorHendlerApi = async (res: any): Promise<any> => {
  if (res.status > 200 && res.status < 300) {
    if (res.headers['content-type'] !== 'application/json') {
      const error = new Error('Некорректный ответ от сервера')
      error.response = res
      throw error
    }
    return res
  } else {
    const error = new Error(res.statusText)
    error.response = res
    throw error
  }
}

export default errorHendlerApi
