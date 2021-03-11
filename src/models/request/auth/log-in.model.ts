import { IsEmail, MinLength } from 'class-validator'
import { ValidationMessage } from '../../../util/validation'
import { BaseModel } from '../base.model'

export class LogInModel extends BaseModel {
  @IsEmail(undefined, { message: ValidationMessage.RequiredField })
  public email: string = ''

  @MinLength(8, { message: ValidationMessage.TooShort })
  public password: string = ''
}
