import { useField } from 'formik'
import { HTMLMotionProps } from 'framer-motion'
import React from 'react'
import { getClassNames } from '../../util'
import { BaseInput, generateInputLabel, InputWrapper } from './common'

interface Props {
  name: string
  label: string
  className?: string
  required?: boolean
  placeholder: string
  type: HTMLMotionProps<'input'>['type']
  extras?: HTMLMotionProps<'input'>
}

export const TextInput: React.FC<Props> = ({
  name,
  label,
  className,
  required,
  placeholder,
  type,
  extras,
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
      <BaseInput placeholder={placeholder} type={type} {...field} {...extras} />
      {invalid && <span className="error-message">{meta.error}</span>}
    </InputWrapper>
  )
}
