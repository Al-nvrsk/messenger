import Block from 'utils/Block'
import './userStat.css'

interface UserStatProps {
  name: string
  value: string
}

export default class UserStat extends Block {
  static componentName = 'UserStat'
  constructor ({ value, name }: UserStatProps) {
    super({ value, name })
  }

  protected render (): string {
    return `
      <div class = "userinfoMain">
        <div class = "userinfo">
          <span class = "userinfoNameField"> {{name}} </span>
          <p class = "userinfoValueField"> {{value}} </p>
        </div>

        <hr class = "userinfo_line" />
      </div>
    `
  }
}
