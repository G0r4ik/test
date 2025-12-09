export interface UserDto {
  id: number
  firstname: string
  lastname: string
  email: string
  birthDate: string
  avatar?: string | null
}

export interface User extends UserDto {
  age: number
}

export type SortKey = keyof User
