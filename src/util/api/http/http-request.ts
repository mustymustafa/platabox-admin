import { HttpMethod } from './http-method'

export interface HttpRequest<RequestType = never> {
  endpoint: string
  method: HttpMethod
  body?: RequestType
}
