import { User } from '../models'
import { HttpClient } from '../util'

export class UsersService {
  public static listUsers() {
    return HttpClient.get<User[]>(`getusers`)
  }
}
