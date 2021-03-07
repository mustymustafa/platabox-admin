import { action, computed, observable } from 'mobx'
import { User } from '../models'
import { UsersService } from '../services'

class Store {
  @observable
  private __users = observable.array<User>([], { deep: false })

  @computed
  public get users() {
    return this.__users.toJSON()
  }

  @action
  private __listUsers() {
    return UsersService.listUsers().subscribe({
      next: ({ data: users }) => {
        this.__users.replace((users as any).value)
      },
    })
  }

  @action
  public listUsers() {
    if (this.users.length) return
    this.__listUsers()
  }

  @action
  public refreshUsers() {
    this.__listUsers()
  }
}

export const usersStore = new Store()
