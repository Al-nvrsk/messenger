import './messageCard.css'

import Block from '../../utils/Block'

interface messageCardProps {

  content: string
  userId?: number
  id: number
  ownMessage: string

}

export default class messageCard extends Block<Indexed> {
  static componentName = 'messageCard'
  constructor ({ content, id, userId, ownMessage }: messageCardProps) {
    super({ content, id, userId, ownMessage })
  }

  protected render (): string {
    return `
      <div class = "messageCard" > 
        <div class = "messageUser">
          {{userId}}:
        </div>
        <div class = "messageTitle" >
          <span> {{id}} </span>
            {{content}}
        </div>
      </div>
    `
  }
}
