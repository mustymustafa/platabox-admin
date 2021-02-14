import { LoginPage } from './auth'
import { UsersPage } from './users'

// [path: string, component: React.FC, exact?: boolean]
type Route = [string, boolean, React.FC] | [string, boolean, React.FC, boolean]

export const routes: Route[] = [
  ['/', true, UsersPage, true],
  ['/users', true, UsersPage],
  ['/log-in', false, LoginPage],
]
