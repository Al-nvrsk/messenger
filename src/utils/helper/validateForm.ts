interface ValidateRule {
  type: string
  value: string
}

export default function validateForm (rules: ValidateRule): string {
  let errorMessage: string = ''
  const { type, value } = rules
  if (type) {
    if (type.includes('name')) {
      if (value.length === 0) {
        errorMessage = 'The name can`t be empty'
      } else if (/^[^A-ZА-ЯЁ]/.test(value)) {
        errorMessage = 'The first latter have to be capital'
      } else if ((/[0-9]/.test(value))) {
        errorMessage = 'Numbers are not allowed'
      } else if (/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value)) {
        errorMessage = 'The name conteined invalid symbol'
      }
    }
    if (type.includes('ogin')) {
      if (value.length < 3) {
        errorMessage = 'The login have to contein at least 3 letters'
      } else if (value.length > 20) {
        errorMessage = 'The login have to contein max 20 letters'
      } else if (/[ `!@#$%^&*()+=[\]{};':"\\|,.<>/?~]/.test(value)) {
        errorMessage = 'The login conteined invalid symbol'
      } else if (!(/[a-zA-ZА-Яа-я]*/.test(value))) {
        errorMessage = 'The login have to contein latters'
      }
    }
    if (type.includes('email')) {
      if (!(/\S+@\S+\.\S+/.test(value))) {
        errorMessage = 'The email adress is invalid'
      }
    }
    if (type.includes('assword')) {
      if (value.length < 8) {
        errorMessage = 'The password have to contein at least 8 symbols'
      } else if (value.length > 40) {
        errorMessage = 'The password have to contein max 40 symbols'
      } else if (!(/[A-ZА-ЯЁ]/.test(value))) {
        errorMessage = 'The password have to contein at least 1 capital letter'
      } else if (!(/[0-9]/.test(value))) {
        errorMessage = 'The password have to contein at least 1 digit'
      }
    }
    if (type.includes('hone')) {
      if (value.length < 10) {
        errorMessage = 'The phone number have to contein at least 10 digits'
      } else if (value.length > 15) {
        errorMessage = 'The phone number have to contein max 15 digits'
      } else if (/^[+]/.test(value)) {
        if (value.split(/[\D]/).length <= 2) {
          errorMessage = ''
        } else { errorMessage = 'The phone number contein unallowed symbol' }
      } else if (/[\D]/.test(value)) {
        errorMessage = 'The phone number contein unallowed symbol'
      }
    }
    if (type.includes('message')) {
      if (value.length === 0) {
        errorMessage = 'The message have to contein something'
      }
    }
  }
  return errorMessage
}
