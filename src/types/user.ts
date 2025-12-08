export interface UserDto {
  id: number
  firstname: string
  lastname: string
  email: string
  birthDate: string
}

export interface User extends UserDto {
  age: number
}

export type SortKey = keyof User
