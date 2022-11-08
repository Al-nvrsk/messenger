declare global {
  export type Nullable<T> = T | null

  export type Keys<T extends Record<string, unknown>> = keyof T
  export type Values<T extends Record<string, unknown>> = T[Keys<T>]
  export type Data = Object[]

  export interface User {
    id: number
    login: string
    firstName: string
    secondName: string
    display_name: string
    avatar: string
    phone: string
    email: string
  }

  export type Indexed<T = any> = {
    [key in string]: T;
  }

  export type Creator<T = any> = {
    [key in string]: T;
    constructor: ()=>void
  }

  export interface LoginFormModel {
    login: string
    password: string
  }

  export interface ResponseData {
    response?: string
  }

  export interface modalWindowType {
    active: boolean
  }

}

export {}
