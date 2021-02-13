import { HttpMethod } from './http-method'
import { HttpRequestHandler } from './http-request-handler'

export class HttpClient {
  public static get<ResponseType>(endpoint: string) {
    return HttpRequestHandler.request<never, ResponseType>({
      endpoint,
      method: HttpMethod.GET,
    })
  }

  public static post<RequestType = never, ResponseType = RequestType>(
    endpoint: string,
    body?: RequestType,
  ) {
    return HttpRequestHandler.request<RequestType, ResponseType>({
      endpoint,
      method: HttpMethod.POST,
      body,
    })
  }

  public static patch<RequestType = never, ResponseType = RequestType>(
    endpoint: string,
    body: RequestType,
  ) {
    return HttpRequestHandler.request<RequestType, ResponseType>({
      endpoint,
      method: HttpMethod.PATCH,
      body,
    })
  }

  public static delete<ResponseType>(endpoint: string) {
    return HttpRequestHandler.request<never, ResponseType>({
      endpoint,
      method: HttpMethod.DELETE,
    })
  }
}
