interface userProfileFormType {
  name: string
  description: string
  ref: string
}

const userProfileForm: userProfileFormType[] = [
  { name: 'first_name', description: 'Input your First name', ref: 'firstNameRef' },
  { name: 'second_name', description: 'Input your Second name', ref: 'secondNameRef' },
  { name: 'login', description: 'Input your Login', ref: 'loginRef' },
  { name: 'email', description: 'Input your email', ref: 'emailRef' },
  { name: 'display_name', description: 'Input your local name for chats', ref: 'displayNameRef' },
  { name: 'phone', description: 'Input your phone number', ref: 'phoneRef' }
]

export default userProfileForm
