import { action, computed, observable } from 'mobx'
import { Delivery } from '../models'
import { DeliveriesService } from '../services'

class Store {
  @observable
  private __deliveries = observable.array<Delivery>([], { deep: false })

  @computed
  public get deliveries() {
    return this.__deliveries.toJSON()
  }

  @action
  private __listDeliveries() {
    return DeliveriesService.listDeliveries().subscribe({
      next: ({ data: { value: deliveries } }) => {
        this.__deliveries.replace(deliveries)
      },
    })
  }

  @action
  public listDeliveries() {
    if (this.deliveries.length) return
    this.__listDeliveries()
  }

  @action
  public refreshDeliveries() {
    this.__listDeliveries()
  }
}

export const deliveriesStore = new Store()
