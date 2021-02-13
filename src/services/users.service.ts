import { User } from '../models'
import { HttpClient } from '../util'

export class UsersServices {
  public static listUsers() {
    return HttpClient.get<User[]>(`getusers`)
  }
}
