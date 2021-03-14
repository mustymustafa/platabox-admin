import { AjaxRequest } from 'rxjs/ajax'
import { BaseModel } from '../../models/request'
import { StorageUtil } from '../storage'
import { HttpRequest } from './http/http-request'

const TOKEN_KEY = 'TOKEN_KEY'

export class ApiUtil {
  public static token?: string

  public static get BASE_URL() {
    return process.env.REACT_APP_BASE_URL
  }

  public static get bearer_token() {
    if (!this.token) {
      return undefined
    }

    return `Bearer ${this.token}`
  }

  public static setToken(token?: string) {
    if (!token) {
      this.token = StorageUtil.extract(TOKEN_KEY)
      return
    }

    this.token = token
    StorageUtil.save(TOKEN_KEY, token)
  }

  public static clearToken() {
    console.log('TOKEN WAS CLEARED')
    this.token = undefined
    StorageUtil.delete(TOKEN_KEY)
  }

  public static getUrl(endpoint: string): string {
    return `${this.BASE_URL}/${endpoint}`
  }

  public static getRequest<RequestType = never>({
    endpoint,
    method,
    body,
  }: HttpRequest<RequestType>): AjaxRequest {
    const headers: Record<string, string> = {
      'content-type': 'application/json',
    }

    if (this.bearer_token) headers.authorization = this.bearer_token

    if (body && body instanceof BaseModel) {
      body = (body as BaseModel).finalize?.() ?? body
    }

    return { method, url: this.getUrl(endpoint), body, headers }
  }
}
