type Arg = string | undefined | boolean | null | Arg[]

export const getClassNames = (...classNames: Arg[]): string => {
  return classNames
    .filter((arg) => !!arg)
    .map((arg) => (Array.isArray(arg) ? getClassNames(...arg) : arg))
    .join(' ')
}
