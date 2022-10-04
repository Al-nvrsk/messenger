interface userRegistrationType {
  name: string
  type: string
  description: string
  ref: string
}

const userRegistration: userRegistrationType[] = [
  { name: 'first_name', type: 'text', description: 'Input your First name', ref: 'firstNameRef' },
  { name: 'second_name', type: 'text', description: 'Input your Second name', ref: 'secondNameRef' },
  { name: 'login', type: 'text', description: 'Input your Login', ref: 'loginRef' },
  { name: 'email', type: 'text', description: 'Input your email', ref: 'emailRef' },
  { name: 'password', type: 'password', description: 'Input your password', ref: 'passwordRef' },
  { name: 'phone', type: 'text', description: 'Input your phone number', ref: 'phoneRef' }
]

export default userRegistration
