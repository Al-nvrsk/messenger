import Block from 'utils/Block'
import './modalWindow.css'
import store from '../../store/Store'
import userChangeAvatarController from '../../controllers/user/userChangeAvatarController'

interface modalWindowType {
  active: boolean
  onWindow: () => void
  onInput: () => void
  onBlur: () => void
  onSave: () => void
}

class modalWindow extends Block {
  static componentName = 'modalWindow'
  constructor ({ ...props }: modalWindowType) {
    super({ props })
    this.setProps({
      store,
      onCancel: () => store.setState('isModalActive', false),
      onSave: async () => await this.onChangeAvatar()
    })
  }

  async onChangeAvatar (): Promise<void> {
    await userChangeAvatarController.changeAvatar()
      .then(() => this.props.onCancel())
  }

  render (): string {
    console.log('modal', this.props)
    return `
      <div  class = ${this.props.props.active ? 'modalWindowActive' : 'modalWindow'}>
      <div class = ${this.props.props.active ? 'modalWindow_contentActive' : 'modalWindow_content'}>
      <div class = "changeInfoInput">
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

export default modalWindow
