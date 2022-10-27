import validateForm from './validateForm'

export default function submitForm (filter: boolean = false): void | object {
  const user: Record <string, string> = {}
  let fields: any = document.querySelectorAll('input')
  if (filter) {
    const arr = Array.from(fields)
    fields = arr.filter((value: any) => !value.name.includes('assword'))
  }
  for (let i = 0; i < fields.length; i++) {
    const fieldname = fields[i].name
    const fieldvalue = fields[i].value
    const errorMessage = validateForm(
      { type: fieldname, value: fieldvalue }
    )
    if (errorMessage) {
      alert('You have problem with input information. Please check fields info. The empty fields not allowed')
      throw new Error(errorMessage)
    } else {
      user[fieldname] = fieldvalue
    }
  }
  return user
}
