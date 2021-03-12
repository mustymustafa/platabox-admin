import { CreateNotificationModel } from '../models/request'
import { HttpClient } from '../util'

export class NotificationsService {
  public static createNotification(model: CreateNotificationModel) {
    return HttpClient.post<CreateNotificationModel>(
      `${model.type}/notification`,
      model,
    )
  }
}
