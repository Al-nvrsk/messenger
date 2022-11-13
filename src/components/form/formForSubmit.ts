import Block from 'utils/Block'
import './formForSubmit.css'

interface FormForSubmitProps {

  onSubmit: () => void
}

export default class FormForSubmit extends Block<Indexed> {
  static componentName = 'FormForSubmit'
  constructor ({ onSubmit }: FormForSubmitProps) {
    super({ events: { submit: onSubmit } })
  }

  protected render (): string {
    return `
    <form class = "authform">
        <div data-slot="1"></div>
    </form>
    `
  }
}
