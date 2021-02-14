import { useField } from 'formik'
import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { getClassNames } from '../../util'

const Wrapper = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  user-select: none;

  .required-marker {
    color: red;
    padding-left: 0.5rem;
  }

  .error-message {
    font-weight: 100;
    font-size: 80%;
    color: var(--color);
    padding: 0.5rem 1rem;
    background: rgba(213, 217, 222, 0.25);
    backdrop-filter: blur(1rem);
  }
`

const Input = styled(motion.input)`
  height: 3rem;
  width: 100%;
  border-radius: 0.125rem;
  border: 1px solid #d5d9de;
  padding: 0 1rem;
  color: #66758a;
  transition: color 0.2s ease;
  user-select: text;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.035);

  :active,
  :focus {
    border-width: 2px;
    border-color: var(--color);
    color: var(--color);
  }

  ::placeholder {
    color: #cad4de;
    letter-spacing: unset;
  }
`

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
  const invalid = React.useMemo(() => meta.error && meta.touched, [meta])
  const valid = React.useMemo(() => !meta.error && meta.touched, [meta])

  return (
    <Wrapper
      className={getClassNames(
        className,
        invalid && 'invalid',
        valid && 'valid',
      )}
    >
      <span>
        {label}
        {required && <span className="required-marker">*</span>}
      </span>
      <Input
        placeholder={placeholder}
        type={type}
        whileHover={{
          scale: 1.025,
          // borderColor: 'var(--color)',
        }}
        {...field}
        {...extras}
      />
      {invalid && <span className="error-message">{meta.error}</span>}
    </Wrapper>
  )
}
