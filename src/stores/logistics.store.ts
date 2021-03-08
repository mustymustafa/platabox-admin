import { action, computed, observable } from 'mobx'
import { Logistics } from '../models'
import { LogisticsService } from '../services'

class Store {
  @observable
  private __logistics = observable.array<Logistics>([], { deep: false })

  @computed
  public get logistics() {
    return this.__logistics.toJSON()
  }

  @action
  private __listLogistics() {
    return LogisticsService.listLogistics().subscribe({
      next: ({ data: { user: logistics } }) => {
        this.__logistics.replace(logistics)
      },
    })
  }

  @action
  public listLogistics() {
    if (this.logistics.length) return
    this.__listLogistics()
  }

  @action
  public refreshLogistics() {
    this.__listLogistics()
  }
}

export const logisticsStore = new Store()
