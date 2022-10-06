interface userAuthType {
  name: string
  type: string
  description: string
  ref: string
}

const userAuth: userAuthType[] = [
  { name: 'login', type: 'text', description: 'Input your login', ref: 'loginRef' },
  { name: 'password', type: 'password', description: 'Input your password', ref: 'passwordRef' }
]

export default userAuth
