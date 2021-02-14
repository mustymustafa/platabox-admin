import { LoginPage } from './auth'
import { UsersPage } from './users'

export const routes = [
  ['/', true, UsersPage, true],
  ['/users', true, UsersPage],
  ['/log-in', false, LoginPage],
]
