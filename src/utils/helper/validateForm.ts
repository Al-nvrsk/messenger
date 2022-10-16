import { errorName, errorLogin, errorEmail, errorPassword, errorPhone, errorChatMessage, reg } from './validateFormConst'

interface ValidateRule {
  type: string
  value: string
}

export default function validateForm (rules: ValidateRule): string | void {
  let errorMessage: string = ''
  const { type, value } = rules
  if (!type) {
    return
  }
  if (type.includes('name')) {
    if (value.length === 0) {
      errorMessage = errorName.empty
    } else if (reg.firstCapitelLetters.test(value)) {
      errorMessage = errorName.letters
    } else if ((reg.numbers.test(value))) {
      errorMessage = errorName.numbers
    } else if (reg.symbols.test(value)) {
      errorMessage = errorName.symbols
    }
  }
  if (type.includes('ogin')) {
    if (value.length < 3) {
      errorMessage = errorLogin.minSize
    } else if (value.length > 20) {
      errorMessage = errorLogin.maxSize
    } else if (reg.symbols.test(value)) {
      errorMessage = errorLogin.symbols
    } else if (!reg.letter.test(value)) {
      errorMessage = errorLogin.letters
    }
  }
  if (type.includes('email')) {
    if (!(reg.email.test(value))) {
      errorMessage = errorEmail
    }
  }
  if (type.includes('assword')) {
    if (value.length < 8) {
      errorMessage = errorPassword.minSize
    } else if (value.length > 40) {
      errorMessage = errorPassword.maxSize
    } else if (!(reg.capitalLetters.test(value))) {
      errorMessage = errorPassword.letters
    } else if (!(reg.numbers.test(value))) {
      errorMessage = errorPassword.numbers
    }
  }
  if (type.includes('hone')) {
    if (value.length < 10) {
      errorMessage = errorPhone.minSize
    } else if (value.length > 15) {
      errorMessage = errorPhone.maxSize
    } else if (reg.plus.test(value)) {
      if (value.split(reg.noNumbers).length <= 2) {
        errorMessage = ''
      } else { errorMessage = errorPhone.symbols }
    } else if (reg.noNumbers.test(value)) {
      errorMessage = errorPhone.symbols
    }
  }
  if (type.includes('message')) {
    if (value.length === 0) {
      errorMessage = errorChatMessage
    }
  }

  return errorMessage
}
