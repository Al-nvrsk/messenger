import { router } from '../../index'
import Block from '../../utils/Block'
import './errorPage.css'

export default class Error404Page extends Block {
  static componentName = 'Error404Page'
  constructor () {
    super()
    this.setProps({
      gotoMain: () => this.gotoMain()
    })
  }

  gotoMain (): void {
    router.go('/auth')
  }

  render (): string {
    return `
      <div class = "errorPage">
        <h1> Error 404 </h1>
        <div> The page is absent </div>
        {{{ ButtonAccept value = "go to Main" type = "button" onClick = gotoMain }}}
      </div>
    `
  }
}
