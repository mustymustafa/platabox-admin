import { CreateNotificationModel } from '../models/request'
import { NotificationsService } from '../services'

class Store {
  public createNotification(model: CreateNotificationModel) {
    return NotificationsService.createNotification(model).subscribe()
  }
}

export const notificationsStore = new Store()
