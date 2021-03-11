import { useField } from 'formik'
import React from 'react'
import { getClassNames } from '../../util'
import { BaseInput, generateInputLabel, InputWrapper } from './common'

interface Props {
  name: string
  label: string
  className?: string
  required?: boolean
  options: [string, any][]
}

export const SelectInput: React.FC<Props> = ({
  name,
  label,
  className,
  required,
  options,
}) => {
  const [field, meta] = useField({ name })
  const invalid = React.useMemo(() => !!meta.error && meta.touched, [meta])
  const valid = React.useMemo(() => !meta.error && meta.touched, [meta])

  return (
    <InputWrapper
      className={getClassNames(
        className,
        invalid && 'invalid',
        valid && 'valid',
      )}
    >
      {generateInputLabel({ valid, invalid, label, required })}
      <BaseInput as="select" {...field}>
        {options.map(([key, value], i) => (
          <option key={i} value={value}>
            {key}
          </option>
        ))}
      </BaseInput>
      {invalid && <span className="error-message">{meta.error}</span>}
    </InputWrapper>
  )
}
