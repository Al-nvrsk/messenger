import validateForm from './validateForm'

export default function submitForm (): void {
  const user = {}
  const fields = document.querySelectorAll('input')
  for (let i = 0; i < fields.length; i++) {
    const fieldname = fields[i].name
    const fieldvalue = fields[i].value
    const errorMessage = validateForm(
      { type: fieldname, value: fieldvalue }
    )
    if (errorMessage) {
      return alert('You have problem with input information. Please check fields info. The empty fields not allowed')
    } else { user[fieldname] = fieldvalue }
  }
  return console.log(user)
}
