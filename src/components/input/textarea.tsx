import { useField } from 'formik'
import React from 'react'
import { getClassNames } from '../../util'
import { BaseInput, generateInputLabel, InputWrapper } from './common'

interface Props {
  name: string
  label: string
  className?: string
  required?: boolean
  placeholder: string
}

export const Textarea: React.FC<Props> = ({
  name,
  label,
  className,
  required,
  placeholder,
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
      <BaseInput as="textarea" placeholder={placeholder} {...field} />
      {invalid && <span className="error-message">{meta.error}</span>}
    </InputWrapper>
  )
}
