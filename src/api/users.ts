import type { UserDto } from '../types/user'

export function getUsers(): Promise<UserDto[]> {
  return new Promise(resolve => setTimeout(() => resolve(mockDataUsers), 1000))
}

export const mockDataUsers: UserDto[] = [
  {
    id: 2,
    firstname: 'Vladimir',
    lastname: 'Minin',
    birthDate: '2000-08-11',
    email: 'vova@gmail.com',
  },
  {
    id: 1,
    firstname: 'Egor',
    lastname: 'Gorlushkin',
    birthDate: '2003-08-11',
    email: 'egor@gmail.com',
  },
  {
    id: 3,
    firstname: 'Nikita',
    lastname: 'Buyanov',
    birthDate: '2010-08-11',
    email: 'tarkov@gmail.com',
  },
  {
    id: 4,
    firstname: 'Ivan',
    lastname: 'Ivanov',
    birthDate: '1990-05-15',
    email: 'ivan.test@mail.ru',
  },
  {
    id: 5,
    firstname: 'Hideo',
    lastname: 'Kojima',
    birthDate: '1963-08-24',
    email: 'genius@konami.jp',
  },
  {
    id: 6,
    firstname: 'Anna',
    lastname: 'Karenina',
    birthDate: '1995-12-01',
    email: 'train_lover@yandex.ru',
  },
  {
    id: 9,
    firstname: 'Gabe',
    lastname: 'Newell',
    birthDate: '1962-11-03',
    email: 'gaben@valvesoftware.com',
  },
  {
    id: 10,
    firstname: 'Elon',
    lastname: 'Musk',
    birthDate: '1971-06-28',
    email: 'doge@tesla.com',
  },
  {
    id: 11,
    firstname: 'Dmitry',
    lastname: 'Nagiev',
    birthDate: '1967-04-04',
    email: 'fizruk@sts.ru',
  },
  {
    id: 12,
    firstname: 'Baby',
    lastname: 'Yoda',
    birthDate: '2023-01-01',
    email: 'force@jedi.org',
  },
  {
    id: 13,
    firstname: 'Keanu',
    lastname: 'Reeves',
    birthDate: '1964-09-02',
    email: 'neo@matrix.net',
  },
  {
    id: 8,
    firstname: 'Zendaya',
    lastname: 'Coleman',
    birthDate: '1996-09-01',
    email: 'mj@spiderman.com',
  },
  {
    id: 7,
    firstname: 'Walter',
    lastname: 'White',
    birthDate: '1958-09-07',
    email: 'heisenberg@cook.com',
  },
]
