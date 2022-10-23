import './chatCard.css'
import Block from 'utils/Block'

interface chatCardProps {

  title: string
  user: string
  id: number
  onClick: () => void
}

export default class chatCard extends Block {
  static componentName = 'chatCard'
  constructor ({ title, user, id, onClick }: chatCardProps) {
    super({ title, user, id, events: { click: onClick } })
  }

  protected render (): string {
    return `
        <div class = "chatCard" id = {{id}}> 
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
