import { ValidationError } from 'class-validator'

interface FormErrors extends Record<string, string | string[]> {}

export function mapErrorsToRecord(errors: ValidationError[]) {
  const mappedErrors: FormErrors = {}

  return errors.reduce((prev, current) => {
    prev[current.property] = Object.values(current.constraints as Record<string, string>)[0]
    return prev
  }, mappedErrors)
}
