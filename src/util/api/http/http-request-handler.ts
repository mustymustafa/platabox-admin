import { of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'
import { ApiResponse, ApiUtil } from '..'
import { HttpRequest } from './http-request'

export class HttpRequestHandler {
  public static request<RequestType = undefined, ResponseType = undefined>(
    args: HttpRequest<RequestType>,
  ) {
    return ajax(ApiUtil.getRequest(args)).pipe(
      catchError((error) => {
        if (error instanceof AjaxError && error.response) {
          console.log(error.response)
          return of({ ...error, response: error.response })
        }

        throw error
      }),
      map(
        (response): ApiResponse<ResponseType> => {
          return {
            ok: response.status < 400,
            data: response.response.data,
            message: response.response.message,
            status: response.status,
          }
        },
      ),
      catchError((error) => {
        throw error
      }),
    )
  }
}
