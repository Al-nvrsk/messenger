import '@testing-library/jest-dom'
import Block from 'utils/Block'

function mockedRenderDOM (Block: Block<Indexed>): void {
  const el = Block
  document.body.innerHTML = '<div id="app"></div>'
  const root = document.querySelector('#app')
  root!.innerHTML = ''
  root!.appendChild(el.getContent())
};

export default mockedRenderDOM
