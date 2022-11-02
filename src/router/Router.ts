import type { RouteType } from './Route'
import Route from './Route'

export interface CoreRouter {
  start: () => void
  use: (pathname: string, callback: () => void) => CoreRouter
  go: (pathname: string) => void
  back: () => void
  forward: () => void
}

export default class Router implements CoreRouter {
  static __instance: any
  routes!: RouteType[]
  history!: History
  _currentRoute!: null | RouteType
  _rootQuery!: string

  constructor (rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  private isStarted = false

  use (pathname: string, block: any): this {
    const route = new Route(pathname, block)
    this.routes.push(route)

    return this
  }

  start (): void {
    if (!this.isStarted) {
      this.isStarted = true
    }

    window.onpopstate = (event: PopStateEvent | Indexed) => {
      this._onRoute(event.currentTarget?.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  _onRoute (pathname: string): void {
    const route = this.getRoute(pathname)
    if (!route) {
      return this._onRoute('/404')
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render()
  }

  go (pathname: string): void {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back (): void {
    this.history.back()
  }

  forward (): void {
    this.history.forward()
  }

  private getRoute (pathname: string): RouteType | undefined {
    return this.routes.find((route: RouteType) => route.match(pathname))
  }
}
