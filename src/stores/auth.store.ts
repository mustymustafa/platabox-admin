import { action, computed, observable } from 'mobx'
import { LogInModel } from '../models/request/auth'
import { AuthService } from '../services'
import { ApiUtil, appHistory } from '../util'

interface Actions {
  done?: (...args: any[]) => any
}

class Store {
  @observable
  private _loggedIn: boolean

  @computed
  public get loggedIn() {
    return this._loggedIn
  }

  @action
  public logIn(login: LogInModel, actions?: Actions) {
    return AuthService.logIn(login).subscribe({
      next: (response) => {
        const {
          ok,
          data: { token },
        } = response

        actions?.done?.(response)

        if (!ok) {
          return
        }

        ApiUtil.setToken(token)
        this._loggedIn = true
        appHistory.push('/')
      },
    })
  }

  @action
  public logOut() {
    ApiUtil.clearToken()
    this._loggedIn = false
    appHistory.push('/log-in')
  }

  constructor() {
    ApiUtil.setToken()

    if (ApiUtil.token) {
      this._loggedIn = true
      return
    }

    this._loggedIn = false
  }
}

export const authStore = new Store()
