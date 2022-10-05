import Block from '../../utils/Block'
import './errorPage.css'

export default class Error500Page extends Block {
  static componentName = 'Error500Page'
  render (): string {
    return `
      <div class = "errorPage">
        <h1> Error 500 </h1>
        <div> We are trying to fix it already </div>
        {{{ Navigation adress = "./index.hbs" value ="Go to Content list"}}}
      </div>
    `
  }
}
