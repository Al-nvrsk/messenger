import validateForm from './validateForm'

export default function submitForm (): void | object {
  const user: Record <string, string> = {}
  const fields = document.querySelectorAll('input')
  for (let i = 0; i < fields.length; i++) {
    const fieldname = fields[i].name
    const fieldvalue = fields[i].value
    const errorMessage = validateForm(
      { type: fieldname, value: fieldvalue }
    )
    if (errorMessage) {
      alert('You have problem with input information. Please check fields info. The empty fields not allowed')
      throw new Error('input information incorrect')
    } else {
      user[fieldname] = fieldvalue
    }
  }
  return user
}
