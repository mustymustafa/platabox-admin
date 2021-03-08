import { Logistics } from '../models'
import { HttpClient } from '../util'

export class LogisticsService {
  public static listLogistics() {
    return HttpClient.get<{ user: Logistics[] }>(`getlogs`)
  }
}
