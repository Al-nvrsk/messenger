import Block from '../../utils/Block'
import './errorPage.css'

export default class Error404Page extends Block {
  render (): string {
    return `
      <div class = "errorPage">
        <h1> Error 404 </h1>
        <div> The page is absent </div>
        {{{ Navigation adress = "./index.hbs" value ="Go to Content list"}}}
      </div>
    `
  }
}
