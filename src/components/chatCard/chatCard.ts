import './chatCard.css'
import Block from 'utils/Block'

interface chatCardProps {

  title: string
  user: string
  onClick: () => void
}

export default class chatCard extends Block {
  static componentName = 'chatCard'
  constructor ({ title, user, onClick }: chatCardProps) {
    super({ title, user, events: { click: onClick } })
  }

  protected render (): string {
    return `
        <div class = "chatCard"> 
          <div class = "chatTitle" >
            {{title}}
          </div>
          <div class = "chatUser">
            {{user}}
          </div>
        </div>
      `
  }
}
