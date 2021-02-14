import { IsEmail, MinLength } from 'class-validator'
import { ValidationMessages } from '../../../util'
import { BaseModel } from '../base.model'

export class LogInModel extends BaseModel {
  @IsEmail(undefined, { message: ValidationMessages.RequiredField })
  public email: string = ''

  @MinLength(8, { message: ValidationMessages.TooShort })
  public password: string = ''
}
