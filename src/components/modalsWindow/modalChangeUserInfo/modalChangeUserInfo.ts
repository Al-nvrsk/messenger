import Block from 'utils/Block'
import './modalChangeUserInfo.css'
import userProfileForm from 'data/userProfileForm'
import store from 'store/Store'
import userChangeProfileController from 'controllers/user/changeUserProfile'

export default class modalChangeUserInfo extends Block<Indexed> {
  static componentName = 'modalChangeUserInfo'
  constructor ({ ...props }: modalWindowType) {
    super({ props })
    this.setProps({
      store,
      onCancel: () => store.setState('isChangeUserInfoActive', false),
      onSave: async (e: Event) => {
        e.preventDefault()
        await this.onChangeUserInfo()
      }
    })
  }

  async onChangeUserInfo (): Promise<void> {
    await userChangeProfileController()
      .then(() => this.props.onCancel())
  }

  render (): string {
    return `
    <div  class = ${this.props.props.active ? 'modalWindowActive' : 'modalWindow'}>
    <div class = ${this.props.props.active ? 'modalWindow_contentActive' : 'modalWindow_content'}>
        {{#FormForSubmit onSubmit = onSave}}
                
                ${this.props.store?.state?.user && (userProfileForm.map(val =>
                  `{{{ ControlledInput name = "${val.name}"
                            onFocus=onFocus
                            onInput=onInput
                            type = "text"
                            value = "${this.props.store.state.user[val.name]}"
                            placeholder = "${val.name}"
                            description = "${val.description}"
                            label = "${val.description}"
                            ref = "${val.ref}"}}}`)).join(' ')}
          <div class = "changeInfoButton">
        {{{ ButtonAccept value = "Save" type = "submit" }}}
        {{{ ButtonReject value = "Cancel" type = "button" onClick = onCancel }}}
            </div>
            {{/FormForSubmit}}
          </div>
      </div>
    `
  }
}
