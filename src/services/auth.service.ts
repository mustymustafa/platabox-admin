import { LogInModel } from '../models/request/auth'
import { HttpClient } from '../util'

export class AuthService {
  public static logIn(login: LogInModel) {
    return HttpClient.post<LogInModel, { token: string }>(`adminsignin`, login)
  }
}
