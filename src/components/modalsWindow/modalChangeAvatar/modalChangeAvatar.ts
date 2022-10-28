import Block from 'utils/Block'
import './modalChangeAvatar.css'
import store from '../../../store/Store'
import userChangeAvatarController from '../../../controllers/user/changeUserAvatar'

export default class modalChangeAvatar extends Block {
  static componentName = 'modalChangeAvatar'
  constructor ({ ...props }: modalWindowType) {
    super({ props })
    this.setProps({
      store,
      onCancel: () => store.setState('isChangeAvatarActive', false),
      onSave: async () => await this.onChangeAvatar()
    })
  }

  async onChangeAvatar (): Promise<void> {
    await userChangeAvatarController()
      .then(() => this.props.onCancel())
  }

  render (): string {
    return `
      <div  class = ${this.props.props.active ? 'modalWindowActive' : 'modalWindow'}>
        <div class = ${this.props.props.active ? 'modalWindow_contentActive' : 'modalWindow_content'}>
          <div class = "changeInfoInputAvatar">
            <form id="myUserForm" >
              <input id="avatar" type="file" name="avatar" accept="image/*">
            </form>
            <div class = "changeInfoButton">
              {{{ ButtonAccept value = "Save" type = "button" onClick = onSave }}}
              {{{ ButtonReject value = "Cancel" type = "button" onClick = onCancel }}}
            </div>
          </div>
        </div>
      </div>
    `
  }
}
