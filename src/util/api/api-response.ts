export interface ApiResponse<ResponseType = never> {
  ok: boolean
  data: ResponseType
  message: string
  status: number
}
