import isEqual from 'utils/helper/isEqual'
import renderDOM from 'utils/renderDOM'

export interface RouteType {
  navigate: (pathname: string) => void
  match: (pathname: string) => boolean
  render: () => void
  leave: () => void
}

class Route implements RouteType {
  _pathname: string
  _blockClass: any
  _block: any
  _props?: any

  constructor (pathname: string, view: any, props?: any) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate (pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave (): void {
    if (this._block) {
      this._block.hide()
    }
  }

  match (pathname: string): boolean {
    return isEqual(pathname, this._pathname)
  }

  render (): void {
    this._block = new this._blockClass()
    renderDOM(this._block)

    // this._block.show()
  }
}

export default Route
