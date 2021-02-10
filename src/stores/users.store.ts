import { action, computed, observable } from 'mobx'
import { UsersServices } from '../services'
import { User } from '../models'

class Store {
  @observable
  private _users: User[] = []

  @computed
  public get users() {
    return this._users
  }

  @action
  public listUsers() {
    return UsersServices.listUsers().subscribe({
      next: ({ data: users }) => {
        this._users = users
      },
    })
  }
}

export const usersStore = new Store()
