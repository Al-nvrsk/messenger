import Block from './Block'
import Handlebars, { HelperOptions } from 'handlebars'

interface BlockConstructable<Props extends Record<string, any> = any, IncomingProps = any> {
  new(props: IncomingProps): Block<Props>
  componentName: string
}

type AnyProps = Record<string, any>

export default function registerComponent<Props extends Record<string, any> = AnyProps, IncomingProps = AnyProps>
(Component: BlockConstructable<Props, IncomingProps>): void {
  Handlebars.registerHelper(Component.componentName || Component.name,
    function (this: Props, { hash: { ref, ...hash }, data, fn }: HelperOptions) {
      if (!data.root.children) {
        data.root.children = {}
      }

      if (!data.root.refs) {
        data.root.refs = {}
      }

      const { children, refs } = data.root

      const component = new Component(hash)

      children[component.id] = component

      if (ref) {
        refs[ref] = component
      }

      const contents = fn ? fn(this) : ''

      return `<div data-id="${component.id}">${contents}</div>`
    })
}
