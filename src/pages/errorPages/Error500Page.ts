import Block from '../../utils/Block'
import { router } from '../../index'
import './errorPage.css'

export default class Error500Page extends Block {
  static componentName = 'Error500Page'
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
        <h1> Error 500 </h1>
        <div> We are trying to fix it already </div>
        {{{ Navigation adress = "./index.hbs" value ="Go to Content list"}}}
        {{{ ButtonAccept value = "go to Main" type = "button" onClick = gotoMain }}}
      </div>
    `
  }
}
