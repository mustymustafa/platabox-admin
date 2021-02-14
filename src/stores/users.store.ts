import { action, computed, observable } from 'mobx'
import { User } from '../models'
import { UsersService } from '../services'

class Store {
  @observable
  private _users: User[] = []

  @computed
  public get users() {
    return this._users
  }

  @action
  public listUsers() {
    return UsersService.listUsers().subscribe({
      next: ({ data: users }) => {
        this._users = users
      },
    })
  }
}

export const usersStore = new Store()
