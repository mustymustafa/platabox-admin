import { IsEnum, MinLength } from 'class-validator'
import { NotificationType } from '../../../util/constants'
import { ValidationMessage } from '../../../util/validation'
import { BaseModel } from '../base.model'

export class CreateNotificationModel extends BaseModel {
  @MinLength(1, { message: ValidationMessage.TooShort })
  public title: string = ''

  @MinLength(1, { message: ValidationMessage.TooShort })
  public body: string = ''

  @IsEnum(NotificationType, { message: ValidationMessage.RequiredField })
  public type: NotificationType = NotificationType.Driver

  public finalize = () => {
    delete (this as any).type
  }
}
