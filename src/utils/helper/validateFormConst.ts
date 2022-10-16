interface Errors {
  empty: string
  letters: string
  numbers: string
  symbols: string
  minSize: string
  maxSize: string
}

interface Reg {
  firstCapitelLetters: RegExp
  capitalLetters: RegExp
  letter: RegExp
  numbers: RegExp
  noNumbers: RegExp
  symbols: RegExp
  email: RegExp
  plus: RegExp
}

const reg: Reg = {
  firstCapitelLetters: /^[^A-ZА-ЯЁ]/,
  capitalLetters: /[A-ZА-ЯЁ]/,
  letter: /[a-zA-ZА-Яа-я]*/,
  numbers: /[0-9]/,
  noNumbers: /[^0-9]/,
  symbols: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
  email: /\S+@\S+\.\S+/,
  plus: /^[+]/
}

const errorName: Errors = {
  empty: 'The name can`t be empty',
  letters: 'The first letter have to be capital',
  numbers: 'Numbers are not allowed',
  symbols: 'The name conteined invalid symbol',
  minSize: '...',
  maxSize: '...'
}

const errorLogin: Errors = {
  minSize: 'The login have to contein at least 3 letters',
  maxSize: 'The login have to contein max 20 letters',
  symbols: 'The login conteined invalid symbol',
  letters: 'The login have to contein letters',
  empty: '...',
  numbers: '...'
}

const errorEmail: string = 'The email adress is invalid'

const errorPassword: Errors = {
  minSize: 'The password have to contein at least 8 symbols',
  maxSize: 'The password have to contein max 40 symbols',
  letters: 'The password have to contein at least 1 capital letter',
  numbers: 'The password have to contein at least 1 digit',
  empty: '...',
  symbols: '...'
}

const errorPhone: Errors = {
  minSize: 'The phone number have to contein at least 10 digits',
  maxSize: 'The phone number have to contein max 15 digits',
  symbols: 'The phone number contein unallowed symbol',
  empty: '...',
  letters: '...',
  numbers: '...'
}

const errorChatMessage: string = 'The message have to contein something'

export { errorName, errorLogin, errorEmail, errorPassword, errorPhone, errorChatMessage, reg }
