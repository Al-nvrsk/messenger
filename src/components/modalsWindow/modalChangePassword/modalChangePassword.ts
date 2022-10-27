import Block from 'utils/Block'
import './modalChangePassword.css'
import store from '../../../store/Store'
import userChangePasswordController from '../../../controllers/user/changeUserPassword'

export default class modalChangePassword extends Block {
  static componentName = 'modalChangePassword'
  constructor ({ ...props }: modalWindowType) {
    super({ props })
    this.setProps({
      store,
      onCancel: () => store.setState('isChangePasswordActive', false),
      onSave: async () => await this.onChangePassword()
    })
  }

  async onChangePassword (): Promise<void> {
    await userChangePasswordController()
      .then(() => this.props.onCancel())
  }

  render (): string {
    return `
    <div  class = ${this.props.props.active ? 'modalWindowActive' : 'modalWindow'}>
      <div class = ${this.props.props.active ? 'modalWindow_contentActive' : 'modalWindow_content'}>
          <form class = "changeInfoInput">
                
                {{{ ControlledInput name = "oldPassword"
                            onFocus=onFocus
                            onInput=onInput
                            type = "password"
                            value = ""
                            placeholder = oldPassword
                            description = "Input old Password"
                            label = "Input old Password"
                            ref = "oldPasswordRef"}}}

                {{{ ControlledInput name = "newPassword"
                            onFocus=onFocus
                            onInput=onInput
                            type = "password"
                            value = ""
                            placeholder = "newPassword"
                            description = "Input new Password"
                            label = "Input new Password"
                            ref = "newPasswordRef"}}}
          <div class = "changeInfoButton">
        {{{ ButtonAccept value = "Save" type = "button" onClick = onSave }}}
        {{{ ButtonReject value = "Cancel" type = "button" onClick = onCancel }}}
            </div>
          </form>
          </div>
      </div>
    `
  }
}
