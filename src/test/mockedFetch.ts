function mockedFetch (status: number, data?: Array<{ [key: string]: string }>): void {
  const xhrMockObj = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    readyState: 4,
    status,
    response: JSON.stringify(data)
  }

  const xhrMockClass = (): Object => xhrMockObj

  // @ts-expect-error
  window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)

  setTimeout(() => {
    // @ts-expect-error
    xhrMockObj.onreadystatechange()
  }, 0)
}

export default mockedFetch
