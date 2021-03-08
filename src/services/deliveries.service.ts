import { Delivery } from '../models'
import { HttpClient } from '../util'

export class DeliveriesService {
  public static listDeliveries() {
    return HttpClient.get<{ value: Delivery[] }>(`getdeliveires`)
  }
}
