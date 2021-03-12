export abstract class BaseModel {
  public transform?: () => void // To be called before running validation checks
  public finalize?: () => any // To be called after validation; before being sent in a request
}
